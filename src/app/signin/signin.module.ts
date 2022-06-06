import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SigninRoutingModule } from './signin-routing.module';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { SigninComponent } from './signin.component';


@NgModule({
  declarations: [
    SigninComponent,
  ],
  imports: [
    CommonModule,
    SigninRoutingModule,
    FormsModule , 
    ReactiveFormsModule,
  ]
})
export class SigninModule { }
