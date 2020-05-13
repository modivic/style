import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  t="enter your data";
  t2="enter your data";
  hello(tt){
    this.t=tt;
    if(this.t!=""){
      this.t="done";
    }
    else{
      this.t="enter your data"
    }
  }

  hello2(tt2){
    this.t2=tt2;
    if(this.t2!=""){
      this.t2="done";
    }
    else{
      this.t2="enter your data"
    }
  }

  ngOnInit() {
  }

}
