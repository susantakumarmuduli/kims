import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent implements OnInit {
  constructor(
    private apiService: HttpService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}
  form!: FormGroup;
  isError = false;
  errorMessage = '';
  ngOnInit() {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  get f() {
    return this.form.controls;
  }
  onSubmit() {
    this.apiService
      .login(this.f['username'].value, this.f['password'].value)
      .subscribe({
        next: (res: any) => {
          if (res['Message'] == 'Valid User') {
            this.isError = false;
            this.router.navigate(['/kims']);
          } else {
            this.errorMessage = res['Message'];
            this.isError = true;
            alert(this.errorMessage);
          }
        },
        error: (err) => {
          this.errorMessage = err['Message'];
          this.isError = true;
          alert(this.errorMessage);
        },
      });
  }
}
