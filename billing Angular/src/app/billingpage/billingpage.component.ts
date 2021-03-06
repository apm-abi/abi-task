import { NgForOf } from '@angular/common';
import { BOOL_TYPE } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-billingpage',
  templateUrl: './billingpage.component.html',
  styleUrls: ['./billingpage.component.css'],
})
export class BillingpageComponent {

  list: any = [];
  add: any;
  row: any;
  qty: number;

  exam = [];
  test = [
    {
      a: '',
      b: 0,
    },
    {
      a: '',
      b: 0,
    },
    {
      a: '',
      b: 0,
    },
  ];


  constructor() {
    const li = localStorage.getItem('lis');
    if (li) {
      this.list = JSON.parse(li);
    }
  }
  // tslint:disable-next-line:typedef
  te(){
    return(JSON.stringify(this.test));
  }
  // tslint:disable-next-line:typedef
  sum() {
    this.add = this.list.reduce((a: number, b: any) => {
      // tslint:disable-next-line:radix
      return a + parseInt(b.p);
    }, 0);
  }
// tslint:disable-next-line:typedef
addd(){
  let rowdata ={
    fname: '',
    fprice: ''
  };
  this.exam.push(rowdata);
  localStorage.setItem('lis', JSON.stringify(this.exam));

}
}

3