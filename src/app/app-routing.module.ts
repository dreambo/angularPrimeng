import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/primeng/customer.component';
import { ProductComponent } from './product/primeng/product.component';
import { HomeComponent } from './home/home.component';
import { ProductMatComponent } from './product/material/product-mat.component';

const routes: Routes = [
  {path: 'home',     component: HomeComponent},
  {path: 'table',    component: ProductMatComponent},
  {path: 'customer', component: CustomerComponent},
  {path: 'product',  component: ProductComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
