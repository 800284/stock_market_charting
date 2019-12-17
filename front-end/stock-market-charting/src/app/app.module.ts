import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ImportExcelComponent } from './stock-market/import-excel/import-excel.component';
import { HomePageComponent } from './stock-market/home-page/home-page.component';
import { GetSummaryComponent } from './stock-market/get-summary/get-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    ImportExcelComponent,
    HomePageComponent,
    GetSummaryComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
