import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  fname = '';
  fprice = '';
  row = 0;
  col = 0;

  rows = [];
  cols = [];

  list = [];
  constructor() {
    const li = localStorage.getItem('lis');
    if (li) {
      this.list = JSON.parse(li);
    }
  }
  // tslint:disable-next-line:typedef
  add() {
    const h = {
      n: this.fname,
      p: this.fprice
    };
    this.list.push(h);
    localStorage.setItem('lis', JSON.stringify(this.list));
  }
  // tslint:disable-next-line:typedef
  remove(list) {
    const index = this.list.indexOf(list);
    // tslint:disable-next-line:align
    this.list.splice(index, 1);
  }

  // tslint:disable-next-line:align
  tab() {
    this.rows = [];

    for (let i = 0; i < this.row; i++) {
      this.rows.push('');
    }
    this.cols = [];
    let d = this.col;
    this.cols.push(d);
  }
 
}





