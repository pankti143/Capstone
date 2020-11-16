import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminhomepageComponent } from './adminhomepage/adminhomepage.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { UserhomepageComponent } from './userhomepage/userhomepage.component';

const routes: Routes = [
  {path:"", component:HomepageComponent},
  { path: "user", component: UserComponent },
  {path:"admin",component:AdminComponent},
  {path:'login',component:LoginComponent},
  {path:"userhomepage",component:UserhomepageComponent},
  {path:"adminhomepage",component:AdminhomepageComponent},
  {path:"contactus",component:ContactusComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  UserComponent;
  AdminComponent;
}
 
