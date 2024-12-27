import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyUserComponent } from './my-user/my-user.component';

const routes: Routes = [
  { path: '', redirectTo : 'home' , pathMatch : 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'myUser/:id', component: MyUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
