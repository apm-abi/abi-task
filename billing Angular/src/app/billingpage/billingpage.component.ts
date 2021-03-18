import { NgForOf } from '@angular/common';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { BOOL_TYPE } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-billingpage',
  templateUrl: './billingpage.component.html',
  styleUrls: ['./billingpage.component.css'],
})
export class BillingpageComponent implements OnInit {
  add: any;
  row: any;
  date: any;
  billnumber = 0;
  billarray: any = [];
  rowarray: any = [];
  constructor() {
    const li = localStorage.getItem('lis');
    if (li) {
      this.billarray = JSON.parse(li);
    }
  }
  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.date = new Date();
  }
  // tslint:disable-next-line:typedef
  addd() {
    const data = {
    };
    this.billarray.push(data);
    localStorage.setItem('lis', JSON.stringify(this.billarray));
  }
  // tslint:disable-next-line:typedef
  removebill(b: any) {
    const index = this.billarray.indexOf(b);
    this.billarray.splice(index, 1);
    localStorage.setItem('lis', JSON.stringify(this.billarray));
  }
  // tslint:disable-next-line:typedef
  save() {
    this.billnumber = this.billnumber + 1;
    // this.billarray.push(this.billnumber);
    // localStorage.setItem('lis', JSON.stringify(this.billarray));
  }
  // tslint:disable-next-line:typedef
  tot() {
    let total = 0;
    const b = this.billarray.forEach((x: any) => {
      total += x.pric * x.quantity;
    });
    localStorage.setItem('lis', JSON.stringify(this.billarray));
    return total;
  }
}
