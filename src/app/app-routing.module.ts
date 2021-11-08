import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAddressComponent } from './components/add-address/add-address.component';
import { EditAddressComponent } from './components/edit-address/edit-address.component';
import { ListAddressComponent } from './components/list-address/list-address.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/partials/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path:"", redirectTo:'/adress', pathMatch: 'full'
  },
  {
    path: "adress", children:[
      {
        path:"", component: ListAddressComponent
      },
      {
        path:"create", component: AddAddressComponent
      },
      {
        path:"edit/:id", component: EditAddressComponent
      },
    ]
  },
  {
    path:"login", component: LoginComponent
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
