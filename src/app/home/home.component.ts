import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  steps:Array<any>=[
    {
      stepimage:"../../assets/images/reserve/1.png",
      stepdescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, inventore! Laboriosam vitae necessitatibus, praesentium voluptas perspiciatis impedit dolore laborum blanditiis quo nemo veritatis ratione placeat tempora cum deleniti reiciendis tenetur?"
    },
    {
      stepimage:"../../assets/images/reserve/2.png",
      stepdescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, inventore! Laboriosam vitae necessitatibus, praesentium voluptas perspiciatis impedit dolore laborum blanditiis quo nemo veritatis ratione placeat tempora cum deleniti reiciendis tenetur?"
    },
    {
      stepimage:"../../assets/images/reserve/3.png",
      stepdescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, inventore! Laboriosam vitae necessitatibus, praesentium voluptas perspiciatis impedit dolore laborum blanditiis quo nemo veritatis ratione placeat tempora cum deleniti reiciendis tenetur?"
    },
  ]

  ownersteps:Array<any>=[
    {
      stepimage:"../../assets/images/reserve/add.png",
      stepname:"Add Your Work Space",
      stepdescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, inventore! Laboriosam vitae necessitatibus, praesentium voluptas perspiciatis impedit dolore laborum blanditiis quo nemo veritatis ratione placeat tempora cum deleniti reiciendis tenetur?"
    },
    {
      stepimage:"../../assets/images/reserve/process.png",
      stepname:"Manage Your Work Space Details",
      stepdescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, inventore! Laboriosam vitae necessitatibus, praesentium voluptas perspiciatis impedit dolore laborum blanditiis quo nemo veritatis ratione placeat tempora cum deleniti reiciendis tenetur?"
    },
    {
      stepimage:"../../assets/images/reserve/get-money.png",
      stepname:"Get Money From Renting Your Work Space",
      stepdescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, inventore! Laboriosam vitae necessitatibus, praesentium voluptas perspiciatis impedit dolore laborum blanditiis quo nemo veritatis ratione placeat tempora cum deleniti reiciendis tenetur?"
    },
  ]
  reviewers : Array<any>=[
    {
      reviewerimage : "../assets/images/places/a6.png",
      reviewerna : "John Deo",
    },{
      reviewerimage  : "../assets/images/places/a5.jpg ",
      reviewerna : "Maria Hwang",
    },{
      reviewerimage : "../assets/images/places/p3.png",
      reviewerna : "Jemmy Dom",
    },{
      reviewerimage  : "../assets/images/places/p4.png",
      reviewerna : "Sarah Json",
    }
  ]
  ngOnInit(): void {
  }

}
