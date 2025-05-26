import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  QueryConstraint,
} from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export abstract class FireStoreService<T extends { id?: string }> {
  protected firestore = inject(Firestore);
  protected collectionName: string;

  constructor(collection: string) {
    this.collectionName = collection;
  }

  collection(queryConstraints?: QueryConstraint[]) {
    const ref = collection(this.firestore, this.collectionName);
    return queryConstraints ? query(ref, ...queryConstraints) : ref;
  }

  getSnapshotChanges(queryConstraints?: QueryConstraint[]): Observable<T[]> {
    const ref = this.collection(queryConstraints);
    return collectionData(ref, { idField: 'id' }) as Observable<T[]>;
  }

  add(data: T) {
    const ref = collection(this.firestore, this.collectionName);
    return from(addDoc(ref, data));
  }

  update(data: T) {
    const ref = doc(this.firestore, this.collectionName, data.id ?? '');
    return from(updateDoc(ref, { ...data }));
  }

  delete(data: T) {
    const ref = doc(this.firestore, this.collectionName, data.id ?? '');
    return from(deleteDoc(ref));
  }
}
