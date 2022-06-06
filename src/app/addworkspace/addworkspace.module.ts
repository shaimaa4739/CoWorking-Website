import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddworkspaceRoutingModule } from './addworkspace-routing.module';
import { AddworkspaceComponent } from './addworkspace.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AddworkspaceComponent
  ],
  imports: [
    CommonModule,
    AddworkspaceRoutingModule,
    FormsModule , 
    ReactiveFormsModule,
  ]
})
export class AddworkspaceModule { }
