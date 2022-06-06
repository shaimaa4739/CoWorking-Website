import { Component, OnInit } from '@angular/core';
import { userlogin } from '../userlogin';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor() { }
  usrlogin : userlogin = new userlogin("","");
  onSubmitForm():void{
    console.log(this.usrlogin);
  }
  ngOnInit(): void {
  }

}
