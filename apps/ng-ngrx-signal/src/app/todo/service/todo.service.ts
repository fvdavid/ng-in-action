import { inject, Injectable } from '@angular/core';
import { CrudService } from '../../shared/crud-base.service';
import { Todo } from '../model/todo.model';
import { lastValueFrom, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const apiUrl = `https://sampletodobackend.azurewebsites.net/api/v1/`;

@Injectable({
  providedIn: 'root',
})
export class TodoService implements CrudService<Todo> {
  private readonly http = inject(HttpClient);

  private url = `${apiUrl}todos`;

  getItems(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.url);
  }

  getItemsAsPromise(): Promise<Todo[]> {
    return lastValueFrom(this.http.get<Todo[]>(this.url));
  }

  getItem(id: string): Observable<Todo> {
    return this.http.get<Todo>(`${this.url}/${id}`);
  }

  addItem(value: string): Observable<Todo> {
    return this.http.post<Todo>(this.url, { value });
  }

  updateItem(value: Todo): Observable<Todo> {
    return this.http.put<Todo>(`${this.url}/${value.id}`, value);
  }

  deleteItem(value: Todo): Observable<unknown> {
    return this.http.delete(`${this.url}/${value.id}`);
  }
}
