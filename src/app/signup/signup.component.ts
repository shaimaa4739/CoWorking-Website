import { Component, OnInit } from '@angular/core';
import { User } from '../User';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }
  usrsignup : User = new User("","","","");
  onSubmitForm():void{
    console.log(this.usrsignup);
  }
  ngOnInit(): void {
  }

}
