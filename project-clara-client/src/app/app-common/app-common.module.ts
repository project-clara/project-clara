import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {MessagesComponent} from './messages/messages.component';
import {LoginStateNavbarComponent} from './login-state-navbar/login-state-navbar.component';
import {AuthLoginFormComponent} from './auth-login-form/auth-login-form.component';
import { FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    HeaderComponent,
    MessagesComponent,
    LoginStateNavbarComponent,
    AuthLoginFormComponent
  ], exports: [
    HeaderComponent,
    MessagesComponent,
    LoginStateNavbarComponent,
    AuthLoginFormComponent
  ]
})
export class AppCommonModule { }
