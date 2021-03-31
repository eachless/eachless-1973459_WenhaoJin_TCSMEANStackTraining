import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import {task} from '../taskInfo.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  taskArr:Array<task>=[];
  constructor(public taskSer:TaskService) { 
    
  }

  ngOnInit(): void {
   
    this.taskSer.loadData().subscribe(result=>this.taskArr =result,error =>console.log(error)); 
    }
  
  storeTask(taskInfo:any){
 
     this.taskSer.storeTask(taskInfo);
     console.log(taskInfo);
     
  }

}
