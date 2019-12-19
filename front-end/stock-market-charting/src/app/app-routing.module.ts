import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './stock-market/home-page/home-page.component';
import { ImportExcelComponent } from './stock-market/import-excel/import-excel.component';
import { SignupComponent } from './site/signup/signup.component';
import { LoginComponent } from './site/login/login.component';
import { SignupSuccessComponent } from './site/signup-success/signup-success.component';
import { UserUpdateComponent } from './site/user-update/user-update.component';
import { ViewCompaniesComponent } from './stock-market/view-companies/view-companies.component';
import { ChartComponent } from './stock-market/chart/chart.component';
import { WelcomeUserComponent } from './stock-market/welcome-user/welcome-user.component';
import { CompareChartComponent } from './stock-market/compare-chart/compare-chart.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "", component: HomePageComponent },
  {
    path: "home", component: HomePageComponent, children: [
      {
        path: "",
        component: WelcomeUserComponent,
        outlet: "customoutlet"
      },
      {
        path: "import-excel",
        component: ImportExcelComponent,
        outlet: "customoutlet"
      },
      { path: "view-companies", 
        component: ViewCompaniesComponent, 
        outlet: "customoutlet" 
      },
      { path: "", 
        component: WelcomeUserComponent, 
        outlet: "customoutletuser" 
      },
      { path: "view-companies", 
        component: ViewCompaniesComponent, 
        outlet: "customoutletuser" 
      },
      { path: "view-chart", 
        component: ChartComponent, 
        outlet: "customoutletuser" 
      },
      { path: "compare-chart", 
        component: CompareChartComponent, 
        outlet: "customoutletuser" 
      }
    ]
  },
  { path: "register", component: SignupComponent },
  { path: "login", component: LoginComponent },
  { path: "signup-success", component: SignupSuccessComponent },
  { path: "update-profile", component: UserUpdateComponent },





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
