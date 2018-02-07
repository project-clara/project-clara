import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { SurveyService } from './survey.service';
import { MessageService } from './message.service';
import {SurveyModule} from './survey/survey.module';
import {AppCommonModule} from './app-common/app-common.module';

/**
 * The AppModule provides the root module of the application. It imports all existing feature modules.
 */
@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    // @angular/platform-browser
    BrowserModule,
    // @angular/forms
    FormsModule,
    // @angular/http
    HttpModule,
    // @ng-bootstrap/ng-bootstrap
    NgbModule.forRoot(),
    // app.routing
    AppRoutingModule,
    // core/core.module
    CoreModule,
    // shared/shared.module
    SharedModule,
    // HTTP Client for Rest-Calls
    HttpClientModule,
    SurveyModule,
    AppCommonModule
  ],
  providers: [SurveyService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
