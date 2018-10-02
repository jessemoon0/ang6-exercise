import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ITodo } from '../interfaces/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private url: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public getTodosList() {
    return this.http.get<ITodo[]>(this.url);
  }

  public getTodo(id: number) {
    return this.http.get<ITodo>(this.url + '/' + id);
  }
}
