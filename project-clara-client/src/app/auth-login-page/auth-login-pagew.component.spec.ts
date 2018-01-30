import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthLoginPagewComponent } from './auth-login-pagew.component';

describe('AuthLoginPagewComponent', () => {
  let component: AuthLoginPagewComponent;
  let fixture: ComponentFixture<AuthLoginPagewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthLoginPagewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthLoginPagewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
