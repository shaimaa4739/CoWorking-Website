import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  workspaces : Array<any>= [
    {
      src1:"../assets/images/places/p1.jpg",
      src2:"../assets/images/places/p2.jpg",
      src3:"../assets/images/places/p3.jpg",
      placename:"Nile City Tower",
      placelocation:"",
      from :"10:00 AM",
      to : "10:00 PM",
      rooms:"5",
      person:"18",
      price:"500"
    },
    {
      src1:"../assets/images/places/p4.jpg",
      src2:"../assets/images/places/p5.jpg",
      src3:"../assets/images/places/p6.jpg",
      placename:"Nasr City Olympic Building",
      from :"12:00 AM",
      to : "12:00 PM",
      rooms:"10",
      person:"80",
      price:"900"
    },
    {
      src1:"../assets/images/places/p7.jpg",
      src2:"../assets/images/places/p8.jpg",
      src3:"../assets/images/places/p9.jpg",
      placename:"47 Office Building",
      from :"01:00 AM",
      to : "01:00 PM",
      rooms:"1",
      person:"10",
      price:"200"
    },
    {
      src1:"../assets/images/places/p10.jpg",
      src2:"../assets/images/places/p11.jpg",
      src3:"../assets/images/places/p12.jpg",
      placename:"Arkan Plaza Building 4",
      from :"08:00 AM",
      to : "08:00 PM",
      rooms:"7",
      person:"40",
      price:"400"
    },
    {
      src1:"../assets/images/places/p1.jpg",
      src2:"../assets/images/places/p2.jpg",
      src3:"../assets/images/places/p3.jpg",
      placename:"Nile City Tower",
      placelocation:"",
      from :"10:00 AM",
      to : "10:00 PM",
      rooms:"5",
      person:"18",
      price:"500"
    },
    {
      src1:"../assets/images/places/p1.jpg",
      src2:"../assets/images/places/p2.jpg",
      src3:"../assets/images/places/p3.jpg",
      placename:"Nasr City Olympic Building",
      from :"12:00 AM",
      to : "12:00 PM",
      rooms:"10",
      person:"80",
      price:"900"
    },
    {
      src1:"../assets/images/places/p7.jpg",
      src2:"../assets/images/places/p8.jpg",
      src3:"../assets/images/places/p9.jpg",
      placename:"47 Office Building",
      from :"01:00 AM",
      to : "01:00 PM",
      rooms:"1",
      person:"10",
      price:"200"
    },
    {
      src1:"../assets/images/places/p10.jpg",
      src2:"../assets/images/places/p11.jpg",
      src3:"../assets/images/places/p12.jpg",
      placename:"Arkan Plaza Building 4",
      from :"08:00 AM",
      to : "08:00 PM",
      rooms:"7",
      person:"40",
      price:"400"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
