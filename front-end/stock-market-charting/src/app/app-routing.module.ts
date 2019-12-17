import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './stock-market/home-page/home-page.component';
import { ImportExcelComponent } from './stock-market/import-excel/import-excel.component';
import { SignupComponent } from './site/signup/signup.component';
import { LoginComponent } from './site/login/login.component';
import { SignupSuccessComponent } from './site/signup-success/signup-success.component';
import { UserUpdateComponent } from './site/user-update/user-update.component';

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
  },
  {path:"register",component:SignupComponent},
  {path:"login",component:LoginComponent},
  {path:"signup-success",component:SignupSuccessComponent},
  {path:"update-profile",component:UserUpdateComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
