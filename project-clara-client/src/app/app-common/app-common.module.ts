import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {MessagesComponent} from './messages/messages.component';
import {LoginStateNavbarComponent} from './login-state-navbar/login-state-navbar.component';
import {AuthLoginPageComponent} from './auth-login-page/auth-login-page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeaderComponent,
    MessagesComponent,
    LoginStateNavbarComponent,
    AuthLoginPageComponent
  ]
})
export class AppCommonModule { }
