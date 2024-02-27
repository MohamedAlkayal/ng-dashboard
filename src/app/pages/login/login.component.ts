import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators, FormControl } from '@angular/forms';
import { AdminServices } from '../../services/admin.service';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule, HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { TokenUtilsService } from '../../services/token/token-utils.service';
import { CommonModule } from '@angular/common';
import { httpInterceptor } from '../../services/interceptors/http-interceptor.interceptor';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, CommonModule],
  providers: [AdminServices],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isValid: boolean = true
  message: string = ""
  isLoading: boolean = false
  constructor(
    private adminServices: AdminServices,
    private router: Router,
    private token: TokenUtilsService
  ) { }
 

  loginForm = new FormGroup({
    username: new FormControl(
      '',
      [
        Validators.required,
        Validators.minLength(3),
      ]),
    password: new FormControl(
      '',
      [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)
      ]),
  });

  get formValus() { return this.loginForm.controls; }

  onSubmit() {
    this.isLoading = true;
    if (this.loginForm.valid) {

      const username = this.formValus.username.value;
      const password = this.formValus.password.value;

      this.adminServices.loginAdmin(
        username,
        password)
        .subscribe({
          next: (res: any) => {
            if (res.authorities.admin === true) {
              console.log("login successful")
              console.log(res)
              this.token.storeToken(res)
              this.router.navigate(['admin/home'])
              this.isLoading = false;
              this.token.cheackForTokenExpiration()
            }
          },
          error: (error: HttpErrorResponse) => {
            console.error('Login failed:', error);
            console.log(error)
            this.router.navigate(['login'])
            this.isValid = false
            this.isLoading = false;
          }
        })
    } else {
      this.isValid = false
      this.isLoading = false;
    }
  }
}
