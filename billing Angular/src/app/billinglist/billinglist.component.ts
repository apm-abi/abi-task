import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-billinglist',
  templateUrl: './billinglist.component.html',
  styleUrls: ['./billinglist.component.css']
})
export class BillinglistComponent {
   productarray: any[];
  constructor() {
    const li = localStorage.getItem('lis');
    if (li) {
      this.productarray = JSON.parse(li);
    }
  }
  // tslint:disable-next-line:typedef
  add(){
  }
  // tslint:disable-next-line:typedef
  remove(){
  }
}
