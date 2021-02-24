import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Product } from '../../model/product';
import { ProductService } from '../../service/productservice';
import { ProductMatDataSource } from './product-mat.datasource';

@Component({
  templateUrl: './product-mat.component.html',
  styleUrls: ['./product-mat.component.css']
})
export class ProductMatComponent implements AfterViewInit, OnInit {

  @ViewChild(MatPaginator)
  paginator?: MatPaginator;

  @ViewChild(MatSort)
  sort?: MatSort;

  @ViewChild(MatTable)
  table?: MatTable<Product>;

  dataSource?: ProductMatDataSource;
  displayedColumns = ['name', 'code', 'price', 'category', 'rating', 'inventoryStatus',];
  rowsPerPage = 8;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.dataSource = new ProductMatDataSource(this.productService, this.displayedColumns);
  }

  ngAfterViewInit() {
      this.dataSource.sort      = this.sort;
      this.dataSource.paginator = this.paginator;
      this.table.dataSource     = this.dataSource;
  }
}
