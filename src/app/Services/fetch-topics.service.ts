import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

import { Topic } from '../Classes/topic';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class FetchTopicsService extends HttpService {
  private serverUrl = 'http://localhost:8080'
  
  constructor(
    private _http: HttpClient
  ) { 
    super(_http)
  }

  fetchTopics(): Observable<Topic[]> {
    let url = `${this.serverUrl}/topics`
    return super.getRequest(url) as Observable<Topic[]>

  }

  fetchTopic(id): Observable<Topic> {
    let url = `${this.serverUrl}/topic/${id}`;
    console.log(url);
    return super.getRequest(url) as Observable<Topic>
  }
}
