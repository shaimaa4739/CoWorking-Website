import { Component, OnInit } from '@angular/core';
import { workspace } from '../workspace';

@Component({
  selector: 'app-addworkspace',
  templateUrl: './addworkspace.component.html',
  styleUrls: ['./addworkspace.component.css']
})
export class AddworkspaceComponent  {

  constructor() { }
   new: workspace = new workspace("Shaimaa","","","","","","");
  onSubmitForm():void{
    console.log(this.new);
  }
  div1:boolean=true;
  div2:boolean=false;
  div1Function(){
    this.div1=false;
    this.div2=true;
}

}
