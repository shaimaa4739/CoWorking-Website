import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { BookRoutingModule } from './book-routing.module';
import { BookComponent } from './book.component';


@NgModule({
  declarations: [
    BookComponent,
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    FormsModule , 
    ReactiveFormsModule,
  ]
})
export class BookModule { }
