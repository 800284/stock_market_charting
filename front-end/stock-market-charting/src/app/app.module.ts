import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ImportExcelComponent } from './stock-market/import-excel/import-excel.component';
import { HomePageComponent } from './stock-market/home-page/home-page.component';
import { GetSummaryComponent } from './stock-market/get-summary/get-summary.component';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './site/signup/signup.component';
import { LoginComponent } from './site/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupSuccessComponent } from './site/signup-success/signup-success.component';
import { UserUpdateComponent } from './site/user-update/user-update.component';
import { SearchCompaniesComponent } from './user/search-companies/search-companies.component';
@NgModule({
  declarations: [
    AppComponent,
    ImportExcelComponent,
    HomePageComponent,
    GetSummaryComponent,
    HeaderComponent,
    SignupComponent,
    LoginComponent,
    SignupSuccessComponent,
    UserUpdateComponent,
    SearchCompaniesComponent,

  ],
  imports: [
    
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
