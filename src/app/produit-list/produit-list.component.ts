import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ProduitListDataSource, ProduitListItem } from './produit-list-datasource';

@Component({
  selector: 'app-produit-list',
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.css']
})
export class ProduitListComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator)
  paginator?: MatPaginator;
  @ViewChild(MatSort)
  sort?: MatSort;
  @ViewChild(MatTable)
  table?: MatTable<ProduitListItem>;

  dataSource?: ProduitListDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new ProduitListDataSource();
  }

  ngAfterViewInit() {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.table.dataSource = this.dataSource;
  }
}
