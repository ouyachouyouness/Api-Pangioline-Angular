import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAddressComponent } from './components/add-address/add-address.component';
import { EditAddressComponent } from './components/edit-address/edit-address.component';
import { ListAddressComponent } from './components/list-address/list-address.component';
import { LoginComponent } from './components/login/login.component';
import { PageOneComponent } from './components/page-one/page-one.component';
import { PageNotFoundComponent } from './components/partials/page-not-found/page-not-found.component';
import { SignComponent } from './components/sign/sign.component';
import { AuthGuard } from './guards/auth.guard';
import { AfterAuthGuard } from './guards/after-auth.guard';
import { AccountComponent } from './components/account/account.component';

const routes: Routes = [
  {
    path:"", redirectTo:'/address', pathMatch: 'full'
  },
  
  {
    path: "address", children:[
      {
        path:"", component: ListAddressComponent
      },
      {
        path:"create", component: AddAddressComponent
      },
      {
        path:"edit/:id", component: EditAddressComponent
      },
      
      
    ],  canActivate:[AuthGuard]
  
    
    
  },

  {
    path: "account", component: AccountComponent, canActivate:[AuthGuard]
  },
  {
    path:"login", component: LoginComponent, canActivate:[AfterAuthGuard]
  },
  {
    path:"sign", component: SignComponent
  },
  {
    path:"page-one", component: PageOneComponent
  },
  {
    path:"**", component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
