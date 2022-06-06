import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PricingplaneRoutingModule } from './pricingplane-routing.module';
import { PricingplaneComponent } from './pricingplane.component';


@NgModule({
  declarations: [
    PricingplaneComponent,
  ],
  imports: [
    CommonModule,
    PricingplaneRoutingModule
  ]
})
export class PricingplaneModule { }
