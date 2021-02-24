import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';
import { ProductService } from '../../service/productservice';
import { trigger,state,style,transition,animate } from '@angular/animations';
import { LazyLoadEvent } from 'primeng/api';

@Component({
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css'],
    animations: [
        trigger('rowExpansionTrigger', [
            state('void', style({
                transform: 'translateX(-10%)',
                opacity: 0
            })),
            state('active', style({
                transform: 'translateX(0)',
                opacity: 1
            })),
            transition('* <=> *', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
        ])
    ]
})
export class ProductComponent implements OnInit {
    title = 'rien';
    cols: any[] = [];
    details: any[] = [];
    products: Product[] = [];
    virtualProducts: Product[] = [];
    totalRecords = 84;
    rowsPerPage = 8;
    loading = true;

    constructor(private productService: ProductService) { }

    ngOnInit() {
        this.cols = [
            {field: 'name',     header: 'Name'},
            {field: 'code',     header: 'Code'},
            {field: 'price',    header: 'Price'},
            {field: 'category', header: 'Category'},
            {field: 'rating',   header: 'Reviews'},
            {field: 'inventoryStatus', header: 'Status'}
        ];
        this.details = [
            {field: 'id',       header: 'Id'},
            {field: 'customer', header: 'Customer'},
            {field: 'date',     header: 'Date'},
            {field: 'amount',   header: 'Amount'},
            {field: 'status',   header: 'Status'}
        ];

        this.products = Array.from({length: this.totalRecords}).map(x => this.productService.generateProduct());
    }

    loadProductLazy(event: LazyLoadEvent) {
        this.loading = true;
        if (event.first != undefined && event.rows) {
            let begin = event.first;
            let end = begin + event.rows;
            setTimeout(() => {
                this.virtualProducts = this.products.slice(begin, end);
                this.loading = false;
            }, 1000);
        }
    }
}
