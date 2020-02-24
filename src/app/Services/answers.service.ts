import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AnswersService extends HttpService {

  constructor(
    private _http: HttpClient
  ) { 
    super(_http)
  }
  private serverUrl = 'http://localhost:8080'


  addAnswer(answer: string, userId: number, questionId: string): Observable<any> {
    let url = `${this.serverUrl}/addAnswer`;
    let obj = {
      answer, userId, questionId
    }
    return super.postRequest(url, obj) as Observable<any>
  }

  getAnswers(questionId: string): Observable<any> {
    let url = `${this.serverUrl}/getAnswers/${questionId}`;
    return super.getRequest(url)
  }

  updateAnswer(answer: string, answerId: string, questionId: string) :Observable<any> {
    let url = `${this.serverUrl}/updateAnswer`;
    return super.putRequest(url, {answerId: answerId, questionId: questionId, answer});
  }

  updateLikes(answerId: string, questionId: string, likes: number): Observable<any> {
    let url = `${this.serverUrl}/updateAnswerLikes`;
    return super.putRequest(url, {answerId, questionId, likes});
  }

  updateDislikes(answerId: string, questionId: string, dislikes: number): Observable<any> {
    let url = `${this.serverUrl}/updateAnswerDislikes`;
    return super.putRequest(url, {answerId, questionId, dislikes});
  }

  deleteAnswer(answerId: string, questionId: string): Observable<any> {
    let url = `${this.serverUrl}/deleteAnswer/${questionId}/${answerId}`;
    return super.deleteRequest(url)
  } 
}
