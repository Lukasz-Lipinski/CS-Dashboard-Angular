import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

type FormType = 'register' | 'signin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  panelForm!: FormGroup;
  labels: Array<{ inputName: string; inputType: string }> = [
    { inputName: 'email', inputType: 'email' },
    { inputName: 'password', inputType: 'password' },
  ];
  formType: FormType = 'signin';

  constructor(private builder: FormBuilder) {}

  ngOnInit() {
    this.panelForm = this.builder.group({
      email: this.builder.control('', [Validators.required, Validators.email]),
      password: this.builder.control('', [Validators.required]),
    });
  }

  setOption(text: FormType) {
    if (text === 'register') {
      this.formType = 'register';
      return;
    }
    this.formType = 'signin';
  }

  submit() {
    if (this.panelForm.valid) {
      console.log(this.panelForm);
    }
  }
}
