import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthenticationService} from '../../core/authentication/authentication.service';
import {MessageService} from '../../message.service';

class LoginModel {
  username = '';
  password = '';
}

enum LoginState {
  PENDING, FAILED, SUCCEEDED
}

@Component({
  selector: 'cla-auth-login-pagew',
  templateUrl: './auth-login-page.component.html',
  styleUrls: ['./auth-login-page.component.scss']
})
export class AuthLoginPageComponent implements OnInit, OnDestroy {
  model = new LoginModel();
  loginState = LoginState.PENDING;

  constructor(private authService: AuthenticationService, private messageService: MessageService) {
    this.resetModel();
  }

  ngOnInit() {
    this.resetModel();
  }

  private resetModel(): void {
    this.model = new LoginModel();
  }


  ngOnDestroy(): void {
    this.resetModel();
  }

  submitUsernamePassword(): void {
    this.authService.login(this.model.username, this.model.password).subscribe(
      this.loginResponse.bind(this),
      this.loginError.bind(this)
    );
  }

  private loginResponse(response: boolean): void {
    this.loginState = response ? LoginState.SUCCEEDED : LoginState.FAILED;
    if (!response) {
      this.messageService.addErrorMessage('Login failed');
    }


  }

  private loginError(error: any): void {
    console.error(error);
    this.messageService.addErrorMessage('Login failed');
    this.loginState = LoginState.FAILED;
  }
}