import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { Customer } from '../../model/customer';
import { CustomerService } from '../../service/customerservice';
import { of } from 'rxjs';

@Component({
  templateUrl: './customer-mat.component.html',
  styleUrls: ['./customer-mat.component.css']
})
export class CustomerMatComponent implements AfterViewInit, OnInit {

  @ViewChild(MatPaginator)
  paginator?: MatPaginator;

  @ViewChild(MatSort)
  sort?: MatSort;

  @ViewChild(MatTable)
  table?: MatTable<Customer>;

  dataSource;
  data: Customer[];
  displayedColumns;
  rowsPerPage = 8;

  constructor(private customerService: CustomerService) {}

  ngOnInit() {

    this.customerService.getCustomersSmall1().subscribe(res => {
      this.data = res.data;
      console.log('this.data=', this.data);
      //this.dataSource = new MatTableDataSource(this.data);
      this.displayedColumns = res.data[0] && Object.keys(this.data[0]);
    });

    this.customerService.getCustomers1().subscribe(res => {
      if (res && res.data) {
        console.log('data:', res.data);
        this.dataSource = new MatTableDataSource(res.data);
        this.displayedColumns = res.data[0] && Object.keys(res.data[0]);
      };
    });
  }

  ngAfterViewInit() {
    this.dataSource && (this.dataSource.sort      = this.sort);
    this.dataSource && (this.dataSource.paginator = this.paginator);
    this.table      && (this.table.dataSource     = this.dataSource);
  }

  filter(key: string) {
    console.log(key);
    this.dataSource.filter = key && key.toLowerCase();
  }
}
