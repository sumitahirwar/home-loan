import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RegisterComponent } from './register/register.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { UploadDocumentsComponent } from './upload-documents/upload-documents.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AboutUsComponent,
    NavBarComponent,
    RegisterComponent,
    UploadDocumentsComponent,
    ContactUsComponent,
    FooterComponent,
    ApplicationTrackerComponent,
    AuthComponent,
    ApplyLoanComponent,
    FaqComponent,
    EmicalculatorComponent,
    CheckEligibilityComponent,
    AdminComponent,
    IncomeDetailsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    MDBBootstrapModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
