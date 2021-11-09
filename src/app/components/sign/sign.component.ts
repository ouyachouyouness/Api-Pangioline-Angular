import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';


@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {

  signForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null,[ Validators.required, Validators.minLength(6), Validators.maxLength(6)]),
    Name: new FormControl(null, [Validators.required]),
    


  })

  constructor(private tokenService: TokenService ,private authService: AuthService, private router: Router, private accountService: AccountService) { }

  ngOnInit(): void {
  }

  sign(){
    this.authService.sign(this.signForm.value).subscribe(res => this.handleResponse(res)
    
    )
  }

  handleResponse(res: Object){
    this.tokenService.handle(res)
    this.accountService.changestatus(true)
    this.router.navigateByUrl("/address")
  }

}
