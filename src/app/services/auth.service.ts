import { Injectable } from '@angular/core';
import { LoginComponent } from '../components/login/login.component';
import { HttpClient} from "@angular/common/http"
import { LocalizedString } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUser: any = {
    token: null,
    user: {
      id: null,
      name: null,
      email: null
    }
  };
  constructor(
    private http: HttpClient
    ) {}

    login(data: { email: String, password: String }){
      return this.http.post("http://localhost:8001/api/signin", data);
    }

    sign(data: { name : String, email: String, password: String, age: Number, nourriture: String }){
      return this.http.post("http://localhost:8001/api/signup", data);
    }

    // setUser(data: any) {
    //   this.authUser = data !== undefined ? data : {};
    // }

    // getUser() {
    //   return this.authUser;
    // }
   
}
