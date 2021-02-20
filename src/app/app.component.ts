import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Product } from './model/product';
import { ProductService } from './service/productservice';
import { trigger,state,style,transition,animate } from '@angular/animations';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
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
export class AppComponent implements OnChanges { 

    cols: any[];
    details: any[];
    products: Product[];
    virtualProducts: Product[];
    totalRecords = 84;
    rowsPerPage = 8;
    loading = true;

    constructor(private productService: ProductService) { }

    ngOnInit() {
        // this.productService.getProds().subscribe(res => this.products = res.data);

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
        this.loadProductLazy({first: 0, rows: this.rowsPerPage});
    }

    loadProductLazy(event: LazyLoadEvent) {
        this.loading = true;
        //simulate remote connection with a timeout
        setTimeout(() => {
            //load data of required page
            this.virtualProducts = this.products.slice(event.first, (event.first + event.rows));
            console.log('[' + event.first + ', ' + (event.first + event.rows) + "[", this.virtualProducts);

            //populate page of virtual cars
            // Array.prototype.splice.apply(this.virtualProducts, [...[event.first, event.rows], ...prods]);

            //trigger change detection
            this.virtualProducts = [...this.virtualProducts];
            this.loading = false;
        }, 3000);
    }



  public ngOnChanges(change: SimpleChanges): void {
    alert(change);
    if (change.data) {
        this.products = Array.from({length: 1000}).map(() => this.productService.generateProduct());
        this.virtualProducts = Array.from({length: 1000});
        this.loading = false;
        alert('Je suis la');
    }
  }
}
