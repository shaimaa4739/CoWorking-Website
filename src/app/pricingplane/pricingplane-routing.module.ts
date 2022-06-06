import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PricingplaneComponent } from './pricingplane.component';

const routes: Routes = [
  {
    path:'',component:PricingplaneComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PricingplaneRoutingModule { }
