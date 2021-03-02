import { BOOL_TYPE } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-billingpage',
  templateUrl: './billingpage.component.html',
  styleUrls: ['./billingpage.component.css']
})
export class BillingpageComponent {

  list = [];
  constructor() {
      const li = localStorage.getItem('lis');
      if (li) {
        this.list = JSON.parse(li);
    }
  }
  // tslint:disable-next-line:align
}
