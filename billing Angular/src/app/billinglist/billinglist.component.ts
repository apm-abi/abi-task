import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-billinglist',
  templateUrl: './billinglist.component.html',
  styleUrls: ['./billinglist.component.css'],
})
export class BillinglistComponent {
  productarray: any[];
  sno = 0;
  date;
  billnum;
  total;
  amt;
  action;
  snum: any;
  constructor() {
    const li = localStorage.getItem('lis');
    if (li) {
      this.productarray = JSON.parse(li);
    }
  }
  // tslint:disable-next-line:typedef
  add() {
    const data = {
      snum: this.sno,
      date: this.date,
      billnumber: this.billnum,
      tot: this.total,
      amount: this.amt,
      action: this.action,
    };
    this.productarray.push(data);
    this.snum = this.snum + 1;
  }
  // tslint:disable-next-line:typedef
  remove() {}
}
