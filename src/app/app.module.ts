import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThirdtaskComponent } from './thirdtask/thirdtask.component';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';
import { MyFirstCustomDirective } from './custom-directive/my-first-custom.directive';
import { SecondCustomDirective } from './custom-directive/second-custom.directive';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { InactiveUsersComponent } from './inactive-users/inactive-users.component';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyUserComponent } from './my-user/my-user.component';
import { ProjectFormComponent } from './project-form/project-form.component';
import { provideHttpClient } from '@angular/common/http';

  const appRoutes : Routes = [
    {path : "form", component : FormComponent},
    {path : "game", component : GameControlComponent}
  ]
@NgModule({
  declarations: [
    AppComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    FormComponent,
    ThirdtaskComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    MyFirstCustomDirective,
    SecondCustomDirective,
    ActiveUsersComponent,
    InactiveUsersComponent,
    HomeComponent,
    MyUserComponent,
    ProjectFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
