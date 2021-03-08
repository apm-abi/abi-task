import { NgForOf } from '@angular/common';
import { BOOL_TYPE } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-billingpage',
  templateUrl: './billingpage.component.html',
  styleUrls: ['./billingpage.component.css'],
})
export class BillingpageComponent {

  productarray: any = [];
  add: any;
  row: any;
  qty: number;
  billarray = [];
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
  // tslint:disable-next-line:typedef
  // tslint:disable-next-line:typedef
  sum() {
    this.add = this.productarray.reduce((a: number, b: any) => {
      // tslint:disable-next-line:radix
      return a + parseInt(b.p);
    }, 0);
  }
// tslint:disable-next-line:typedef
addd(){
  let data = {
    fname: '',
    fprice: ''
  };
  this.billarray.push(data);
  localStorage.setItem('bill', JSON.stringify(this.billarray));
}
// tslint:disable-next-line:typedef
// onChangeName(j: any) {
//   console.log('changes', j);
//   const name = j.fname;
//   // tslint:disable-next-line:no-shadowed-variable
//   const x = this.billarray.find(x => x.fname === name);
//   j.fprice = x.fprice;
// }
// tslint:disable-next-line:typedef
removebill(billarray) {
  const index = this.billarray.indexOf(billarray);
  // tslint:disable-next-line:align
  this.billarray.splice(index, 1);
  localStorage.setItem('bill', JSON.stringify(this.billarray));

}

}
