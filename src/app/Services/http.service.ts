import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  constructor(
    private http: HttpClient
  ) { }

  getRequest(url: string): Observable<any> {
    return  this.http.get(url)
  }

  postRequest(url: string, obj: any): Observable<any> {
    return this.http.post(url, obj, this.httpOptions);
  }

  putRequest(url: string, obj: any): Observable<any> {
    return this.http.put(url, obj, this.httpOptions);
  }

  deleteRequest(url: string): Observable<any> {
    return this.http.delete(url, this.httpOptions);
  }

}
