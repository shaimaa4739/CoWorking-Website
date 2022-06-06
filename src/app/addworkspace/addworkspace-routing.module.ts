import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddworkspaceComponent } from './addworkspace.component';

const routes: Routes = [
  {path:'',component:AddworkspaceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddworkspaceRoutingModule { }
