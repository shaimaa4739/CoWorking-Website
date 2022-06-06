import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlacepageRoutingModule } from './placepage-routing.module';
import { PlacepageComponent } from './placepage.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    PlacepageComponent,
  ],
  imports: [
    CommonModule,
    PlacepageRoutingModule,
    FormsModule , 
    ReactiveFormsModule,
  ]
})
export class PlacepageModule { }
