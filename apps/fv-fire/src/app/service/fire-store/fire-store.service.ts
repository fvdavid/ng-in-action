import { Injectable, inject } from '@angular/core';
// import { AngularFirestore, QueryFn } from '@angular/fire/compat/firestore';
// import { from, map } from 'rxjs';

import {
  Firestore,
  collection,
  collectionData,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  QueryConstraint
} from '@angular/fire/firestore';
import { from, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export abstract class FireStoreService<T extends { id?: string }> {
  // #firestore = inject(AngularFirestore);
  // #collectionName: string;

  // constructor(collection: string) {
  //   this.#collectionName = collection;
  // }

  // collection(queryFn?: QueryFn) {
  //   return this.#firestore.collection<T>(this.#collectionName, queryFn);
  // }

  // getSnapshotChanges(queryFn?: QueryFn) {
  //   return this.#firestore
  //     .collection<T>(this.#collectionName, queryFn)
  //     .snapshotChanges()
  //     .pipe(
  //       map((data) =>
  //         data.map((d) => {
  //           const data: T = { id: d.payload.doc.id, ...d.payload.doc.data() };
  //           return data;
  //         })
  //       )
  //     );
  // }

  // add(data: T) {
  //   return from(this.#firestore.collection<T>(this.#collectionName).add(data));
  // }

  // update(data: T) {
  //   return from(
  //     this.#firestore
  //       .collection<T>(this.#collectionName)
  //       .doc(data.id)
  //       .update(data)
  //   );
  // }

  // delete(data: T) {
  //   return from(
  //     this.#firestore.collection<T>(this.#collectionName).doc(data.id).delete()
  //   );
  // }

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
    const ref = doc(this.firestore, this.collectionName, data.id!);
    return from(updateDoc(ref, { ...data }));
  }

  delete(data: T) {
    const ref = doc(this.firestore, this.collectionName, data.id!);
    return from(deleteDoc(ref));
  }
}
