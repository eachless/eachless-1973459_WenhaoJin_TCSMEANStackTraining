import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { answer } from './answer.model';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  constructor(public http:HttpClient) { }
  loadAnswerDetail():Observable<answer[]>{
    return this.http.get<answer[]>("assets/answer.json");
  }
  
}

