import { Component} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Booking } from '../Booking';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent  {

  constructor(private toast:ToastrService) { }

  showToastr(){
    this.toast.success('Reservation is done please pay on arrival','Comind')
    
  }
  reservation : Booking = new Booking("","","","","","","","");
  onSubmitForm():void{
    console.log(this.reservation);
  }
  div1:boolean=false;
  div1Function(){
    this.div1=true;
}

}
