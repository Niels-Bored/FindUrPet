import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BiographyComponent } from './biography/biography.component';
import { TestingComponent } from './testing/testing.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdoptComponent } from './adopt/adopt.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { AddComponent } from './add/add.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfilePanelComponent } from './profile-panel/profile-panel.component';
import { UserAComponent } from './user-a/user-a.component';
import { UserLComponent } from './user-l/user-l.component';
import { EditAdoptComponent } from './edit-adopt/edit-adopt.component';
import { EditLostComponent } from './edit-lost/edit-lost.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SingleComponent } from './single/single.component';
import { SingleLostComponent } from './single-lost/single-lost.component';

@NgModule({
  declarations: [
    AppComponent,
    BiographyComponent,
    TestingComponent,
    HomeComponent,
    LoginComponent,
    AdoptComponent,
    SignupComponent,
    AddComponent,
    ProfileComponent,
    ProfilePanelComponent,
    UserAComponent,
    UserLComponent,
    EditAdoptComponent,
    EditLostComponent,
    SingleComponent,
    SingleLostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
