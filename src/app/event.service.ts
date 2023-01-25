import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor(private http: HttpClient) {}

  getEvents() {
    return this.http.get('http://localhost:5000/api/events/');
  }

  getSpecialEvents() {
    return this.http.get('http://localhost:5000/api/special/');
  }
}
