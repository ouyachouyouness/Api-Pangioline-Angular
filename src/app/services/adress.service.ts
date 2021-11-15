import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Address } from '../models/adress';




@Injectable({
  providedIn: 'root'
})
export class AdressService {

  constructor(private http: HttpClient) {
    
   }

   getAll() {
    return this.http
                  .get<Address[]>(`${environment.apiUrl}/api/user`);
  }

  delete(_id: string) {
    return this.http
              .delete(`http://localhost:8001/api/user/${_id}`);
  }

  add(data: any) {
    return this.http.post('http://localhost:8001/api/user/addPangoline', data);
  }

  getOne(_id: string) {
    return this.http.get(`http://localhost:8001/api/user/${_id}`);
  }

  edit(_id: any, data: any){
    
    return this.http.put(`http://localhost:8001/api/user/${_id}`, data);
  }

  getFriend(_id: any){
    return this.http
                  .get<Address[]>(`${environment.apiUrl}/api/user/${_id}`);
  }

}
