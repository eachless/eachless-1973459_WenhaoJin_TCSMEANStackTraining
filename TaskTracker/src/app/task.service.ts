import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { task } from './taskInfo.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(public http:HttpClient) { }

  storeTask(login:any){
    this.http.post("http://localhost:3000/task",login).
    subscribe(result=>console.log(result),error=>console.log(error));
    
    console.log(login);
  }

  loadData():Observable<task[]> {
    return this.http.get<task[]>("http://localhost:3000/task");
}
}
