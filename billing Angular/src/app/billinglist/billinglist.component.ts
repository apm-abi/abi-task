import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-billinglist',
  templateUrl: './billinglist.component.html',
  styleUrls: ['./billinglist.component.css'],
})
export class BillinglistComponent implements OnInit {
  productarray: any[];
  sno = 0;
  billnum;
  total;
  amt;
  action;
  date: any;
  snum: any;
  constructor() {
    const li = localStorage.getItem('lis');
    if (li) {
      this.productarray = JSON.parse(li);
    }
  }
  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.date = new Date();
 }
  // tslint:disable-next-line:typedef
  add() {
    const data = {
    };
    this.productarray.push(data);
    localStorage.setItem('lis', JSON.stringify(this.productarray));
  }
  // tslint:disable-next-line:typedef
  remove(i: any) {
// const del = this.productarray.indexOf(productarray);
this.productarray.splice(i, 1);
localStorage.setItem('lis', JSON.stringify(this.productarray));
  }
}


