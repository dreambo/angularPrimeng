import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent }   from './app.component';
import { ProductService } from './service/productservice';
import { CustomerService } from './service/customerservice';
import { CustomerComponent } from './customer/primeng/customer.component';
import { ProductComponent } from './product/primeng/product.component';
import { HomeComponent } from './home/home.component';
import { ProductMatComponent } from './product/material/product-mat.component';

import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
import {InputTextModule} from 'primeng/inputtext';
import {RatingModule} from 'primeng/rating';
import { MaterialModule } from './app-material.module';
import { RoutingModule } from './app-routing.module';
import { LayoutModule } from '@angular/cdk/layout';
import { CustomerMatComponent } from './customer/material/customer-mat.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TableModule,
    CalendarModule,
		SliderModule,
		DialogModule,
		MultiSelectModule,
		ContextMenuModule,
		DropdownModule,
		ButtonModule,
		ToastModule,
    InputTextModule,
    ProgressBarModule,
    HttpClientModule,
    FormsModule,
    RatingModule,
    RoutingModule,
    LayoutModule,
    MaterialModule
  ],
  declarations: [
    AppComponent, HomeComponent, ProductComponent,
    CustomerComponent, ProductMatComponent, CustomerMatComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [ ProductService, CustomerService ]
})
export class AppModule { }
