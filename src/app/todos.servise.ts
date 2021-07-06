import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface Todo {
  complited: boolean;
  title: string;
  id?: number;
}

@Injectable({providedIn: 'root'})


export class TodosServise  {
 constructor() {
 }
}
