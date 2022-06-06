import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'',component:HomeComponent},

  {path:'locations',loadChildren:
  ()=> import('./locations/locations.module')
  .then(moduleClass => moduleClass.LocationsModule)},

  {path:'addworkspace',loadChildren:
  ()=> import('./addworkspace/addworkspace.module')
  .then(moduleClass => moduleClass.AddworkspaceModule)},
  {path:'contactus',loadChildren:
  ()=> import('./contactus/contactus.module')
  .then(moduleClass => moduleClass.ContactusModule)},
  {path:'place',loadChildren:
    ()=> import('./placepage/placepage.module')
    .then(moduleClass => moduleClass.PlacepageModule)},

  {path:'reserve',loadChildren:
  ()=> import('./book/book.module')
  .then(moduleClass => moduleClass.BookModule)},
  
  {path:'signin',loadChildren:
  ()=> import('./signin/signin.module')
  .then(moduleClass => moduleClass.SigninModule)},
  {path:'signup',loadChildren:
  ()=> import('./signup/signup.module')
  .then(moduleClass => moduleClass.SignupModule)},
  {path:'pricingplanes',loadChildren:
  ()=> import('./pricingplane/pricingplane.module')
  .then(moduleClass => moduleClass.PricingplaneModule)},
  {path:'**', component:PageNotFoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
