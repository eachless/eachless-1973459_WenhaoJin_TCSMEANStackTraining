import { rendererTypeName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { answer } from '../answer.model';
import { AnswerService } from '../answer.service';


@Component({
  selector: 'app-data-retrieve',
  templateUrl: './data-retrieve.component.html',
  styleUrls: ['./data-retrieve.component.css']
})
export class DataRetrieveComponent implements OnInit {
  ans:Array<answer>=[];
 
  checkedAns = new Map();
  constructor(public an:AnswerService) { }
  rightAns:number = 0;
  ngOnInit(): void {
    
    this.an.loadAnswerDetail().subscribe(result=>this.ans=result);
    //alert(this.ans[0].id);     
  }

  radioChangeHandler(event:any){
    let newAnswer = new answer(event.target.name,event.target.value);  
    this.checkedAns.set(event.target.name,newAnswer);      
  }

  checkAnswer(){
    for( let i =0;i<this.ans.length;i++){
      
      if(this.ans[i].answer == this.checkedAns.get(this.ans[i].id).answer)
      {
        this.rightAns++;
      }else{
        
        let ele = document.getElementById((i+1).toString());
        if(ele){
          ele.style.color ="red";
        }
        //document.getElementById("1")?.style.color;
      }
    }

    alert("you got " +this.rightAns + "right wrong question is highlighted by red color"   );
    
  }
}
