import { AppSettingsProvider } from '../app-settings/app-settings';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TodoServiceProvider {
  apiUrl = this.appSettings.getApiUrl();

  constructor(public http: Http, public appSettings: AppSettingsProvider) {
  }

  public getTodos() {
    return this.http.get(this.apiUrl + 'todos')
    .map(response => response.json().result);
  }

  public addTodo(newTodo) {
    return this.http.post(this.apiUrl + 'todos', {'text':newTodo})
    .map(response => response.json());
  }

  public deleteTodo(todoId) {
    return this.http.delete(this.apiUrl + 'todos/' + todoId)
    .map(response => response.json());
  }
}
