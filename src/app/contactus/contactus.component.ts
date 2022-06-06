import { Component, OnInit } from '@angular/core';
import { contactform } from '../contactform';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor() { }

  message : contactform = new contactform("Shaimaa","","");
  onSubmitForm():void{
    console.log(this.message);
  }
  ngOnInit(): void {
  }

}
