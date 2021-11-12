import { Component, OnInit } from '@angular/core';
import { Address } from './../../models/adress';
import { AdressService } from 'src/app/services/adress.service';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-list-address',
  templateUrl: './list-address.component.html',
  styleUrls: ['./list-address.component.css']
})
export class ListAddressComponent implements OnInit {

  constructor(private addressService: AdressService, private route : Router) { }

  addresses: Address[] = [];

  ngOnInit(): void {

    this.addressService
        .getAll()
        .subscribe((res: Address[]) => this.addresses = res);

  }

  persistAddress(data: Address) { }

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

}


