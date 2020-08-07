import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UsersigninComponent } from './usersignin/usersignin.component';
import { SliderComponent } from './slider/slider.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:"userlogin", component: UserloginComponent},
  {path:"usersignin", component: UsersigninComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }

 
