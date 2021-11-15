import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/models/adress';
import { AdressService } from 'src/app/services/adress.service';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor
  (
    public authService: AuthService,
    private addressService: AdressService,
    private route : Router,
    private token: TokenService,
    private activatedRoute: ActivatedRoute,

   
  ) { }

  addresses: Address[] = [];
  userName: any = '';
  id : any;

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe((data: any) => {
    //   this.id = data['id'];
    

    this.id = this.token.getItem('id');

    this.addressService
  .getFriend(this.id)
  .subscribe((res: Address[]) => this.addresses = res); 
  
  

  this.userName = this.token.getItem('userName');
  

  }

  delete(id: any, index: any) {
    this.addressService
      .delete(id)
                .subscribe((res) => {
                  this.addresses.splice(index, 1);
                 
                });
  }

  

  

}
