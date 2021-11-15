import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAddressComponent } from './components/add-address/add-address.component';
import { EditAddressComponent } from './components/edit-address/edit-address.component';
import { ListAddressComponent } from './components/list-address/list-address.component';
import { NavbarComponent } from './components/partials/navbar/navbar.component';
import { PageNotFoundComponent } from './components/partials/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';

import { ReactiveFormsModule } from "@angular/forms"

import { HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http"
import { JwtInterceptor } from './services/jwt.interceptor';
import { SignComponent } from './components/sign/sign.component';
import { PageOneComponent } from './components/page-one/page-one.component';
import { AccountComponent } from './components/account/account.component';
// import {MatInputModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddAddressComponent,
    EditAddressComponent,
    ListAddressComponent,
    NavbarComponent,
    PageNotFoundComponent,
    LoginComponent,
    SignComponent,
    PageOneComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
