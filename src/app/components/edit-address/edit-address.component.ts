import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdressService } from 'src/app/services/adress.service';

@Component({
  selector: 'app-edit-address',
  templateUrl: './edit-address.component.html',
  styleUrls: ['./edit-address.component.css']
})
export class EditAddressComponent implements OnInit {

  editPan = new FormGroup({
    nourriture: new FormControl(null, [Validators.required]),
    age: new FormControl(null, [Validators.required]),
    famille: new FormControl(null,[ Validators.required]),
    race: new FormControl(null,[ Validators.required]),
    
  });

  loading: boolean = true;
  id: any;

  constructor
    (
      private addressService: AdressService,
      private activatedRoute: ActivatedRoute,
      private route: Router
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data: any) => {
      this.id = data['id'];
      this.addressService.getOne(this.id).subscribe((res: any) => {
        if (res.pangoline !== undefined) {
          this.editPan.get('nourriture')?.setValue(res.pangoline.nourriture);
          this.editPan.get('age')?.setValue(res.pangoline.age);
          this.editPan.get('famille')?.setValue(res.pangoline.famille);
          this.editPan.get('race')?.setValue(res.pangoline.race);
        }
      });
      this.loading = false;
    });
  }

  addPan() {
    const data : any = {
      nourriture : this.editPan.get('nourriture')?.value,
      age : this.editPan.get('age')?.value,
      famille : this.editPan.get('famille')?.value,
      race : this.editPan.get('race')?.value
    }
    
    this.addressService.edit(this.id, data) .subscribe(() => this.route.navigateByUrl('address'));
    
  }

}
