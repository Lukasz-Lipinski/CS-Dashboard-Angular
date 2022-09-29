import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(
    private builder: FormBuilder,
    private authService: AuthService,
    private router: Router
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
    let viewContainerRef = this.snackbarComponent.viewContainerRef;
    viewContainerRef.clear();

    if (this.panelForm.valid) {
      email = this.panelForm.controls['email'].value;
      password = this.panelForm.controls['password'].value;
      const snackbar =
        viewContainerRef.createComponent<SnackbarComponent>(SnackbarComponent);

      if (this.formType === 'register') {
        this.authService.register({ email, password }).subscribe({
          next: (res) => {
            snackbar.instance.isError = false;
            snackbar.instance.message = 'Account created successfully';
            this.panelForm.reset();
          },
          error: (error: HttpErrorResponse) => {
            snackbar.instance.isError = true;
            snackbar.instance.message = error.error.error.message;
            console.log(snackbar);
          },
        });

        return;
      }

      this.authService.signin({ email, password }).subscribe({
        next: (res) => {
          this.authService.logged.next(res.registered);
          this.router.navigate(['dashboard']);
        },
        error: (error: HttpErrorResponse) => {
          snackbar.instance.isError = true;
          snackbar.instance.message = error.error.error.message;
        },
      });
    }
  }
}
