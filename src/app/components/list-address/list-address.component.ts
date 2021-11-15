import { Component, OnInit } from '@angular/core';
import { Address } from './../../models/adress';
import { AdressService } from 'src/app/services/adress.service';
import {  Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';
import { HttpClient } from '@angular/common/http';
import { tap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';


@Component({
  selector: 'app-list-address',
  templateUrl: './list-address.component.html',
  styleUrls: ['./list-address.component.css']
})
export class ListAddressComponent implements OnInit {
  userName: any = '';
  userId: any = null;
  account: null;
  constructor
  (
    public authService: AuthService,
    private addressService: AdressService,
    private route : Router,
    private token: TokenService,
    private http: HttpClient
  ) { }

  addresses: Address[] = [];

  ngOnInit(): void {

    this.addressService
        .getAll()
        .subscribe((res: Address[]) => this.addresses = res);

    this.userName = this.token.getItem('userName');
    this.userId = this.token.getItem('id');
  }

  //persistAddress(data: Address) { }

  delete(id: any, index: any) {
    this.addressService
      .delete(id)
                .subscribe((res) => {
                  this.addresses.splice(index, 1);
                 
                });
  }

  goTo() {
    this.route.navigateByUrl('address/create');
  }

  edit(_id: any){
    this.route.navigateByUrl('address/edit/' + _id);
  }

  show(msg: any) {
    console.log(msg);
    
  }

  addFriend(_id: any){
    const userId: any = this.token.getItem('id');   
    this.http.post('http://localhost:8001/api/user/addFriend', {userId, _id}).pipe(
      tap((data: any) => {
        
      }),
      catchError((err: any) => {
        return of(false)
      })
    ).subscribe();

    this.route.navigateByUrl('account');



  }

}


