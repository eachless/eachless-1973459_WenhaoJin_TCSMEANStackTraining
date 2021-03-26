import { Component, OnInit } from '@angular/core';
import{portfolio} from '../user';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']

})




export class PortfolioComponent implements OnInit {
 
  user1 = localStorage.getItem("key");
  msg = this.showMsg();
  contactInfoArr: Array<portfolio> =new Array();
  constructor() { }

  ngOnInit(): void {
  }
  showMsg():string
  {
   if (this.user1 !=null)
   {
      let user = JSON.parse(this.user1);
      return user.userName;
   }  
   else
    return "1";
  }
  save(contact:any,phoneNumber:any){
   var pf = new portfolio(contact,phoneNumber); 
    this.contactInfoArr.push(pf);
  }
}
