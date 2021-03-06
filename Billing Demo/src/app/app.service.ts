import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() {
    let a = localStorage.getItem('list2');
    if (a) {
      this.itemlist = JSON.parse(a);
    }
    setInterval(() => {
      localStorage.setItem('list2', JSON.stringify(this.itemlist));
    }, 100);
  }
  title = "Demo Application 3";
  itemlist: Array<{
    name: string;
    price: number;
  }> = [];
}
