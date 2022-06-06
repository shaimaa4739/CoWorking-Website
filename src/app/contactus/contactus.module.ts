import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactusRoutingModule } from './contactus-routing.module';
import { ContactusComponent } from './contactus.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    ContactusComponent,
  ],
  imports: [
    CommonModule,
    ContactusRoutingModule,
    FormsModule , 
    ReactiveFormsModule,
  ]
})
export class ContactusModule { }
