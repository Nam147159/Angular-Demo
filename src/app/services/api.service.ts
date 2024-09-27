import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/todos/1';

  constructor(public http: HttpClient) { }

  fetchData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
