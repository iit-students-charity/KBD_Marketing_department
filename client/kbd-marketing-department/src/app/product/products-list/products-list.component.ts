import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  displayedColumns: string[] = [ 
    'Code', 
    'Name', 
    'Category',
    'Price',
    'Actions'
  ];
  dataSource: MatTableDataSource<any>;
  
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  products: any[];

  constructor() { }

  ngOnInit() { 
    this.products = PRODUCTS;
    this.dataSource = new MatTableDataSource(this.products);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}

const PRODUCTS = [
  { Code: 1, Name: 'Apple', Category: 'Food', Price: 1 },
  { Code: 2, Name: 'For Menacy', Category: 'Book', Price: 25 },
  { Code: 3, Name: 'Anatomy Works by ...nnnnnnnn', Category: 'Book', Price: 30 },
  { Code: 4, Name: 'Light top fit', Category: 'Clothing', Price: 2 }
];