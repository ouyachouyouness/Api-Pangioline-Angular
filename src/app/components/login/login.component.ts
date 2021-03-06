import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null,[ Validators.required, Validators.minLength(6), Validators.maxLength(6)])

  })

  constructor(private authService: AuthService, 
            private tokenService: TokenService,
            private router: Router,
            private accountService: AccountService 
             ) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.login(this.loginForm.value).subscribe((res: any) => {
      this.handleResponse(res)
    })
  }

  handleResponse(res: Object){
    this.tokenService.handle(res)
    this.accountService.changestatus(true)
    this.router.navigateByUrl("/address")
  }

}
