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

    this.customerService.getCustomers1().subscribe(res => {
      if (res && res.data) {
        console.log('data:', res.data);
        this.dataSource = new MatTableDataSource(res.data);
        this.displayedColumns = res.data[0] && Object.keys(res.data[0]);

        // filtering nested prediacte
        this.dataSource.filterPredicate = (item: Customer, filter: string) => {
          const accumulator = (currentTerm, key) => {
            return currentTerm + (item[key].name ? item[key].name : item[key]);
          };
          const dataStr = Object.keys(item).reduce(accumulator, '').toLowerCase();
          // Transform the filter by converting it to lowercase and removing whitespace.
          const transformedFilter = filter.trim().toLowerCase();
          return dataStr.indexOf(transformedFilter) !== -1;
        }

        // sorting nested
        this.dataSource.sortingDataAccessor = (item, key) => item[key].name ? item[key].name : item[key];
      };
    });
  }

  ngAfterViewInit() {
    this.dataSource && (this.dataSource.sort      = this.sort);
    this.dataSource && (this.dataSource.paginator = this.paginator);
    this.table      && (this.table.dataSource     = this.dataSource);
  }

  filter(key: string) {
    this.dataSource.filter = key && key.toLowerCase();
  }
}
