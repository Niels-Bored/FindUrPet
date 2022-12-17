import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TestingComponent } from './testing/testing.component'
import { BiographyComponent } from './biography/biography.component'
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AddComponent } from './add/add.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfilePanelComponent } from './profile-panel/profile-panel.component';
import { EditAdoptComponent } from './edit-adopt/edit-adopt.component';
import { EditLostComponent } from './edit-lost/edit-lost.component';
import { SingleComponent } from './single/single.component';
import { SingleLostComponent } from './single-lost/single-lost.component';

const routes: Routes = [
  {path:'',redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'biography', component: BiographyComponent },
  {path: 'testing', component: TestingComponent },
  {path: 'login', component: LoginComponent },
  {path: 'signup', component: SignupComponent },
  {path: 'add', component: AddComponent },
  {path: 'profile', component: ProfileComponent },
  {path: 'profile-panel', component: ProfilePanelComponent },
  {path: 'editAdopt/:id', component: EditAdoptComponent },
  {path: 'editLost/:id', component: EditLostComponent },
  {path: 'single/:id', component: SingleComponent},
  {path: 'singleLost/:id', component: SingleLostComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
