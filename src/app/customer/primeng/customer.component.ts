import { Component, OnInit } from '@angular/core';
import { Customer, Representative } from '../../model/customer';
import { CustomerService } from '../../service/customerservice';
import { LazyLoadEvent } from 'primeng/api';

@Component({
    templateUrl: './customer.component.html',
    styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {

    customers: Customer[] = [];

    totalRecords: number = 0;

    cols: any[] = [];

    loading: boolean = false;
    
    representatives: Representative[] = [];

    constructor(private customerService: CustomerService) { }

    ngOnInit() {
        this.representatives = [
            {name: "Amy Elsner", image: 'amyelsner.png'},
            {name: "Anna Fali", image: 'annafali.png'},
            {name: "Asiya Javayant", image: 'asiyajavayant.png'},
            {name: "Bernardo Dominic", image: 'bernardodominic.png'},
            {name: "Elwin Sharvill", image: 'elwinsharvill.png'},
            {name: "Ioni Bowcher", image: 'ionibowcher.png'},
            {name: "Ivan Magalhaes",image: 'ivanmagalhaes.png'},
            {name: "Onyama Limba", image: 'onyamalimba.png'},
            {name: "Stephen Shaw", image: 'stephenshaw.png'},
            {name: "Xuxue Feng", image: 'xuxuefeng.png'}
        ];

        this.loading = true;
    }

    loadCustomers(event: LazyLoadEvent) {  
        this.loading = true;
        console.log('Event -->', event);
        setTimeout(() => {
            this.customerService.getCustomers({lazyEvent: JSON.stringify(event)}).subscribe(res => {
                this.customers = res.customers;
                this.totalRecords = res.totalRecords;
                this.loading = false;
            })
        }, 1000);
    }
}