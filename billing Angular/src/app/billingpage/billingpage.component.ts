import { NgForOf } from '@angular/common';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { BOOL_TYPE } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-billingpage',
  templateUrl: './billingpage.component.html',
  styleUrls: ['./billingpage.component.css'],
})
export class BillingpageComponent {
  add: any;
  row: any;
  price: number;
  quantity: number;
  total: number;
  billnumber = 0;
  billarray: any = [];
  rowarray: any = [];
  constructor() {
    const li = localStorage.getItem('lis');
    if (li) {
      this.billarray = JSON.parse(li);
    }
    const newdata = {
      pric: this.price,
      quans: this.quantity,
       tot: this.total
   };
    this.billarray.push(newdata);
    localStorage.setItem('lis', JSON.stringify(this.billarray));
    const row = localStorage.getItem('delrow');
    if (row){
      this.rowarray = JSON.parse(row);
    }
  }
  // tslint:disable-next-line:typedef
  sum() {
    this.add = this.billarray.reduce((a: number, b: any) => {
      // tslint:disable-next-line:radix
      return a + parseInt(b.tot);
    }, 0);
  }
// tslint:disable-next-line:typedef
addd(){
  const data = {
    name: '',
 };
  this.rowarray.push(data);
  localStorage.setItem('delrow', JSON.stringify(this.rowarray));
}

// tslint:disable-next-line:typedef
removebill(rowarray) {
  const index = this.rowarray.indexOf(rowarray);
  // tslint:disable-next-line:align
  this.rowarray.splice(index, 1);
  localStorage.setItem('delrow', JSON.stringify(this.rowarray));

}
// tslint:disable-next-line:typedef
save(){
  this.billnumber = this.billnumber + 1;
  this.billarray.push(this.billnumber);
  localStorage.setItem('lis', JSON.stringify(this.billarray));

}
// tslint:disable-next-line:typedef
// sum() {
//   let total = 0;
//   this.billarray.forEach((r: { pric: number; quans: number; }) => {
//   total += r.pric * r.quans;
//   });
//   return total;
//   }
}
// const datas = [{
//   quans: this.quantity,
//   billnum: this.billnumber,
//   tot: this.total
// }
// tslint:disable-next-line:typedef
// onChangeName(k: any) {
//   console.log('changes', k);
//   const name = k.n;
//   // tslint:disable-next-line:no-shadowed-variable
//   const x = this.productarray.find(x => x.n === name);
//   k.p = x.p;
// }

