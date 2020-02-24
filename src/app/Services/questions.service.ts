import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { HttpService } from './http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService extends HttpService {
  private serverUrl = 'http://localhost:8080'
  
  constructor(
    private _http: HttpClient
  ) { 
    super(_http)
  }

  addQuestion(question: string, userId: number, topicId: number): Observable<any> {
    let url = `${this.serverUrl}/addQuestion`;
    let obj = {
      question, userId, topicId
    }
    return super.postRequest(url, obj) as Observable<any>
  }

  getQuestions(topicId: number): Observable<any> {
    let url = `${this.serverUrl}/getQuestions/${topicId}`;
    return super.getRequest(url)
  }

  updateLikes(questionId: string, likes: number): Observable<any> {
    let url = `${this.serverUrl}/updateLikes`;
    return super.putRequest(url, {questionId, likes});
  }

  updateDislikes(questionId: string, dislikes: number): Observable<any> {
    let url = `${this.serverUrl}/updateDislikes`;
    return super.putRequest(url, {questionId, dislikes});
  }

  deleteQuestion(questionId: string): Observable<any> {
    let url = `${this.serverUrl}/deleteQuestion/${questionId}`;
    return super.deleteRequest(url)
  } 

}
