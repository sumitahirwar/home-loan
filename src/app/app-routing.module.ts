import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import {RegisterComponent}from './register/register.component';
import { UploadDocumentsComponent } from './upload-documents/upload-documents.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';

import { ApplicationTrackerComponent } from './application-tracker/application-tracker.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'about', component: AboutUsComponent},
  {path: 'register', component: RegisterComponent},
  {path:'upload-documents',component:UploadDocumentsComponent},
  {path:'contact-us',component:ContactUsComponent},
  {path:'footer',component:FooterComponent},
  
  {path:'application-tracker',component:ApplicationTrackerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
