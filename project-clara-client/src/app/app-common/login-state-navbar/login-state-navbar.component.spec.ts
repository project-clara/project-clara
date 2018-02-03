import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginStateNavbarComponent } from './login-state-navbar.component';

describe('LoginStateNavbarComponent', () => {
  let component: LoginStateNavbarComponent;
  let fixture: ComponentFixture<LoginStateNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginStateNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginStateNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
