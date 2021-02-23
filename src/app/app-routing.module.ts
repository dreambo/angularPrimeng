import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { ProduitListComponent } from './produit-list/produit-list.component';

const routes: Routes = [
  {path: 'home',     component: HomeComponent},
  {path: 'table',    component: ProduitListComponent},
  {path: 'customer', component: CustomerComponent},
  {path: 'product',  component: ProductComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
