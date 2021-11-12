import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdressService } from 'src/app/services/adress.service';
@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit {

  addPan = new FormGroup({
    nourriture: new FormControl(null, [Validators.required]),
    age: new FormControl(null, [Validators.required]),
    famille: new FormControl(null,[ Validators.required]),
    race: new FormControl(null,[ Validators.required]),
    
  });

  constructor
    (
      private addressService: AdressService,
      private route : Router
    ) { }

  ngOnInit(): void {}

  addPangoline() {
    const data : any = {
      nourriture : this.addPan.get('nourriture')?.value,
      age : this.addPan.get('age')?.value,
      famille : this.addPan.get('famille')?.value,
      race : this.addPan.get('race')?.value
    }

    console.log(data);

    this.addressService.add(data).subscribe(() => this.route.navigateByUrl('address'));
    
  }

}
