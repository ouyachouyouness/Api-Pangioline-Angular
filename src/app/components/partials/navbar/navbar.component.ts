import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() userName: string = '';

  @Output() event : EventEmitter<any> = new EventEmitter();

  currentUser: null;

  constructor(private router: Router, private accountService : AccountService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.accountService.authStatus.subscribe(res => {
    this.currentUser  = this.tokenService.getInfos();
    if (this.currentUser !== null) {
      this.event.emit('KAYN');
    }
    })
  }

  logout() {
    this.tokenService.remove();
    this.accountService.changestatus(false);
    this.router.navigateByUrl("/login");

  }

}
