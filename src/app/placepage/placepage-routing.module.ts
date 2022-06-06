import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlacepageComponent } from './placepage.component';

const routes: Routes = [
  {
    path:'',component:PlacepageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlacepageRoutingModule { }
