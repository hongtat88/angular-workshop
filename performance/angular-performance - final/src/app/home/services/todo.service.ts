import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { filter, map, shareReplay } from 'rxjs/Operators'

@Injectable()
export class TodoService {

  constructor(private httpClient: HttpClient) { }

  getToDoList(search: string): Observable<TodoItem[]> {
    return this.httpClient
      .get<TodoItem[]>('https://jsonplaceholder.typicode.com/todos')
      .pipe(
        shareReplay({ refCount: true, bufferSize: 1 }),
        map(x => x.filter(y => y.title.includes(search)))
      );
  }
}

export interface TodoItem {
  userId: number;
  id: number;
  title: string;
  completed: boolean
}
