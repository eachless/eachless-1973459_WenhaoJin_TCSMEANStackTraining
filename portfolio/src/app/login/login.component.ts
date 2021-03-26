import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { user } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  user1 = localStorage.getItem("key");
  
  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  checkUser(inputUserName:any,pw:any){
    if(this.user1 !=null)
    { 
      var user = JSON.parse(this.user1); 
      if(user.userName == inputUserName && user.password ==pw)
      {
        this.router.navigate(["portfolio"]);
      }
      else{
        alert("failed to login");
      }
    }
    
  }

  goRegister(){
    this.router.navigate(["reg"]);
  }


}
