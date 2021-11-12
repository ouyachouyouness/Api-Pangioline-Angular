import { Injectable } from '@angular/core';
import { LoginComponent } from '../components/login/login.component';
import { HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

    login(data: { email: String, password: String }){
      return this.http.post("http://localhost:8001/api/signin", data);
    }

    sign(data: { name : String, email: String, password: String }){
      return this.http.post("http://localhost:8001/api/signup", data);
    }
   
}
