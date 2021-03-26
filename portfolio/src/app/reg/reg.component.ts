import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router'
import { user } from '../user';



@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {
  user1:user = new user();
 
  constructor(public router:Router) { }

  ngOnInit(): void {
  }


  addInfo(info:any,passInfo:any){
    this.user1.userName=info;
    this.user1.password = passInfo;
    localStorage.setItem("key",JSON.stringify(this.user1));
  }

  reset(fname:any,lname:any,userName:any,password:any){
    fname.value="";
    lname.value="";
    userName.value="";
    password.value="";
  }
  gologin(){
    this.router.navigate(["login"]);
  }
}
