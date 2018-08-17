import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DatagetterService {
  constructor(private http: HttpClient) {}

  url = 'https://jsonplaceholder.typicode.com/users';
  readJSON() {
    return this.http.get(this.url);
  }
}
