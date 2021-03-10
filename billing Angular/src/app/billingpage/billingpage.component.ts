import { NgForOf } from '@angular/common';
import { BOOL_TYPE } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-billingpage',
  templateUrl: './billingpage.component.html',
  styleUrls: ['./billingpage.component.css'],
})
export class BillingpageComponent {
  constructor() {
    const li = localStorage.getItem('lis');
    if (li) {
      this.productarray = JSON.parse(li);
    }
    const billlocal = localStorage.getItem('bill');
    if (billlocal) {
      this.billarray = JSON.parse(billlocal);
    }
  }
  productarray: any = [];
  add: any;
  row: any;
  price: number;
  qty: number;
  total: number;
  billno = 0;
  billarray: any = [];
  // tslint:disable-next-line:typedef
  sum() {
    this.add = this.productarray.reduce((a: number, b: any) => {
      // tslint:disable-next-line:radix
      return a + parseInt(b.p);
    }, 0);
  }
// tslint:disable-next-line:typedef
addd(){
  const data = {
    name: '',
    price: '',
    qty: '',
  };
  this.billarray.push(data);
  localStorage.setItem('bill', JSON.stringify(this.billarray));
}
// tslint:disable-next-line:typedef
// onChangeName(k: any) {
//   console.log('changes', k);
//   const name = k.n;
//   // tslint:disable-next-line:no-shadowed-variable
//   const x = this.productarray.find(x => x.n === name);
//   k.p = x.p;
// }
// tslint:disable-next-line:typedef
removebill(billarray) {
  const index = this.billarray.indexOf(billarray);
  // tslint:disable-next-line:align
  this.billarray.splice(index, 1);
  localStorage.setItem('bill', JSON.stringify(this.billarray));

}
// tslint:disable-next-line:typedef
save(){
  this.billno = this.billno + 1;
  this.productarray.push(this.billno);
  localStorage.setItem('lis', JSON.stringify(this.productarray));
}
}


