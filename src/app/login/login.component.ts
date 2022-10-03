import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProfileService } from '../dashboard/profile/profile.service';
import { SnackbarComponent } from '../snackbar/snackbar.component';
import { SnackbarDirective } from '../snackbar/snackbar.directive';
import { AuthService } from './auth.service';

type FormType = 'register' | 'signin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @ViewChild(SnackbarDirective, { static: true })
  snackbarComponent!: SnackbarDirective;
  panelForm!: FormGroup;
  labels: Array<{ inputName: string; inputType: string }> = [
    { inputName: 'email', inputType: 'email' },
    { inputName: 'password', inputType: 'password' },
  ];
  formType: FormType = 'signin';
  timer: any;
  subscription: Subscription = new Subscription();

  constructor(
    private builder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private profileService: ProfileService
  ) {}

  ngOnInit() {
    this.panelForm = this.builder.group({
      email: this.builder.control('', [Validators.required, Validators.email]),
      password: this.builder.control('', [Validators.required]),
    });
  }

  setOption(text: FormType) {
    this.panelForm.reset();
    if (text === 'register') {
      this.formType = 'register';
      return;
    }
    this.formType = 'signin';
  }

  submit() {
    let email: string;
    let password: string;

    if (this.panelForm.valid) {
      email = this.panelForm.controls['email'].value;
      password = this.panelForm.controls['password'].value;

      if (this.formType === 'register') {
        this.subscription = this.authService
          .register({ email, password })
          .subscribe({
            next: (res) => {
              const message: string = `${res.email} was registered successfully`;
              this.createSnackbar(message, false);
            },
            error: (error: HttpErrorResponse) => {
              const { message } = error.error.error;
              this.createSnackbar(message, true);
            },
          });

        this.panelForm.reset();
        return;
      }

      this.subscription = this.authService
        .signin({ email, password })
        .subscribe({
          next: (res) => {
            this.authService.userData.next(res);
            this.profileService.profile.next({ email, password });
            this.router.navigate(['dashboard']);
          },
          error: (error: HttpErrorResponse) => {
            const { message } = error.error.error;
            this.createSnackbar(message, true);
          },
        });
      this.panelForm.reset();
    }
  }

  createSnackbar(message: string, isError: boolean) {
    let viewContainerRef = this.snackbarComponent.viewContainerRef;
    viewContainerRef.clear();

    const snackbar =
      viewContainerRef.createComponent<SnackbarComponent>(SnackbarComponent);

    snackbar.instance.isError = isError;
    snackbar.instance.message = message;

    this.timer = setTimeout(() => {
      snackbar.destroy();
    }, 3000);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    clearTimeout(this.timer);
  }
}
