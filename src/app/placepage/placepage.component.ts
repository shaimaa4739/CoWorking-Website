import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl } from '@angular/forms';

@Component({
  selector: 'app-placepage',
  templateUrl: './placepage.component.html',
  styleUrls: ['./placepage.component.css']
})
export class PlacepageComponent implements OnInit {

  constructor() { }
  facilities : Array<any> =[
    {
      faciltyname:"Wifi",
      faciltyicon:"fas fa-wifi"
    },
    {
      faciltyname:"Lockers",
      faciltyicon:"fas fa-user-lock"
    },
    {
      faciltyname:"Disabled Access",
      faciltyicon:"fas fa-hand-holding-heart"
    },
    {
      faciltyname:"Pets Allowed",
      faciltyicon:"fas fa-paw"
    },
    {
      faciltyname:"Meeting Rooms",
      faciltyicon:"far fa-handshake"
    },
    {
      faciltyname:"Breakout Space",
      faciltyicon:"fas fa-spa"
    },
    {
      faciltyname:"Coffee & Tea",
      faciltyicon:"fas fa-coffee"
    },
    {
      faciltyname:"Bike Storage",
      faciltyicon:"fas fa-biking"
    },
  ]
  notallowed : Array<any> =[
    {
      name:"Events & Talks"
    },
    {
      name:"Printing"
    },
    {
      name:"Parking"
    },
    {
      name:"Roof Terrace"
    },
    {
      name:"Trading Address"
    },
    {
      name:"Event Space"
    },
    {
      name:"Beer & Wine"
    },
    {
      name:"Childcare"
    },
  ]
  reviews : Array<any>=[]
  reviewform = new FormGroup({
    customerReview : new FormControl('John made me explore all placess i wanted to visit and i was so happy'),
  });
  get customerReview(){
    return this.reviewform.get('customerReview');
  }
  onSubmitForm():void{
    this.reviews.push(this.reviewform.value);
  }
  ngOnInit(): void {
  }

}
