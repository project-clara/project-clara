import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { SurveyComponent } from './survey/survey.component';
import {AuthLoginFormComponent} from './app-common/auth-login-form/auth-login-form.component';
import {CreateSurveyComponent} from './survey/create-survey/create-survey.component';


const routes: Routes = [
  {
    path: 'survey', component: SurveyComponent
  },
  {
    path: '', redirectTo: '/survey', pathMatch: 'full'
  },
  {
    path: 'login', component: AuthLoginFormComponent
  },
  {
    path: 'survey/create', component: CreateSurveyComponent
  },

] ;
/**
 * The AppRoutingModule provides all non-feature routes of the application.
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
