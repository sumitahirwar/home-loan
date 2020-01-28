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
import { AuthComponent } from './auth/auth.component';
import { ApplyLoanComponent } from './apply-loan/apply-loan.component';
import { FaqComponent } from './faq/faq.component';

import { EmicalculatorComponent } from './emicalculator/emicalculator.component';
import { CheckEligibilityComponent } from './check-eligibility/check-eligibility.component';
import { AdminComponent } from './admin/admin.component';
import { IncomeDetailsComponent } from './income-details/income-details.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'home',component:HomeComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'login', component: LoginComponent},
  {path: 'about', component: AboutUsComponent},
  {path: 'register', component: RegisterComponent},
  {path:'upload-documents',component:UploadDocumentsComponent},
  {path:'contact-us',component:ContactUsComponent},
  {path:'application-tracker',component:ApplicationTrackerComponent},
  {path:'apply-loan',component:ApplyLoanComponent},
  {path:'faq',component:FaqComponent},
  {path:'emicalucaltor',component:EmicalculatorComponent},
  {path:'check-eligibility',component:CheckEligibilityComponent},
  {path:'admin',component:AdminComponent},
  {path:'income-details',component:IncomeDetailsComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
