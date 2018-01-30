import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { SurveyComponent } from './survey/survey.component';
import {AuthLoginPagewComponent} from './auth-login-page/auth-login-pagew.component';


const routes: Routes = [
  {
    path: 'survey', component: SurveyComponent
  },
  {
    path: '', redirectTo: '/survey', pathMatch: 'full'
  },
  {
    path: 'login', component: AuthLoginPagewComponent
  }

] ;
/**
 * The AppRoutingModule provides all non-feature routes of the application.
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
