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
  quantity: number;
  row = 0;
  col = 0;
  rows = [];
  cols = [];

  productarray = [];
  constructor() {
    const li = localStorage.getItem('lis');
    if (li) {
      this.productarray = JSON.parse(li);
    }
  }
  // tslint:disable-next-line:typedef
  add() {
    const h = {
      name: this.fname,
      price: this.fprice,
    };
    this.productarray.push(h);
    localStorage.setItem('lis', JSON.stringify(this.productarray));
  }
  // tslint:disable-next-line:typedef
  remove(productarray) {
    const index = this.productarray.indexOf(productarray);
    // tslint:disable-next-line:align
    this.productarray.splice(index, 1);
    localStorage.setItem('lis', JSON.stringify(this.productarray));

  }
  // tslint:disable-next-line:align
  // tslint:disable-next-line:typedef
  // tab() {
  //   this.rows = [];

  //   for (let i = 0; i < this.row; i++) {
  //     this.rows.push('');
  //   }
  //   this.cols = [];
  //   for (let j = 0; j < this.col; j++) {
  //     // let d = this.col * this.col;
  //     this.cols.push('');
  //   }
  // }
}

