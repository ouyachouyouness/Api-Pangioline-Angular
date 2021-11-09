import { Component, OnInit } from '@angular/core';
import { AdressService } from 'src/app/services/adress.service';

@Component({
  selector: 'app-list-address',
  templateUrl: './list-address.component.html',
  styleUrls: ['./list-address.component.css']
})
export class ListAddressComponent implements OnInit {

  constructor(private addressService: AdressService) { }

  ngOnInit(): void {
    this.getAllAdresses()
  }

  getAllAdresses(){
    this.addressService.getAll().subscribe(res => console.log(res)
    );
  }

}
