import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/primeng/customer.component';
import { ProductComponent } from './product/primeng/product.component';
import { HomeComponent } from './home/home.component';
import { ProductMatComponent } from './product/material/product-mat.component';
import { CustomerMatComponent } from './customer/material/customer-mat.component';

const routes: Routes = [
  {path: 'home',     component: HomeComponent},
  {path: 'product',  component: ProductComponent},
  {path: 'product-mat',    component: ProductMatComponent},
  {path: 'customer', component: CustomerComponent},
  {path: 'customer-mat', component: CustomerMatComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
