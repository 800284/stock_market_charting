import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './stock-market/home-page/home-page.component';
import { ImportExcelComponent } from './stock-market/import-excel/import-excel.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "", component: HomePageComponent },
  {
    path: "home", component: HomePageComponent, children:[
      {
        path:"",
        component:ImportExcelComponent,
        outlet:"customoutlet"
      },
      {
        path:"import-excel",
        component:ImportExcelComponent,
        outlet:"customoutlet"
      }
    ]
  }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
