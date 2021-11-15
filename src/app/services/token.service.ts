import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  set(data: any) {

    localStorage.setItem('token', data.token);
    localStorage.setItem('id', data.user._id);
    localStorage.setItem('userName', data.user.name);
  }

  handle(data: any) {
    this.set(data);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getId() {
    return localStorage.getItem('id');
  }

  remove() {
    localStorage.removeItem('token');
  }

  getItem(id: string) {
    return localStorage.getItem(id);
  }

  decode(payload: string) {
    console.log('payload : ', payload);
    return JSON.parse(atob(payload));
  }

  payload(token: string) {
    const payload = token.split('.')[1];
    console.log('payload : ', payload);
    return this.decode(payload);
  }


  isValid() {
    const token = this.getToken();
    const id = this.getId();

    if (token) {
      const payload = this.payload(token);
      
      if (payload) {
        return id == payload._id;
      }
    }
    return false;
  }

  getInfos() {

    const token = this.getToken();

    if (token) {
      const payload = this.payload(token);
      return payload ? payload : null;
    }

    return null
  }


  loggedIn() {
    return this.isValid();
  }
}