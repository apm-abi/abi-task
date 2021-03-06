import { ChangeDetectorRef, Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  fname = "eeeee-333";
  name = "";
  visible = false;
  list = ['AAAA', 'VVVVV', 'CCCCC'];

  nlist: Array<any> = [];

  constructor(
    public appService: AppService,
    public changeDetector: ChangeDetectorRef
  ) {

    let a: any = window;
    a["abu"] = this;
    this.addRow();
  }

  addRow() {
    let rowData = {
      name: '',
      price: 0,
      qty: 1
    };
    this.nlist.push(rowData);
  }

  getTotal() {
    let total = 0;
    this.nlist.forEach((x) => {
      total += x.price * x.qty;
    });
    return total;
  }

  getAnswer() {
    console.log('Refreshing....');
    return "Time is " + new Date().toString();
  }

  onChangeName(n: any) {
    console.log('changes', n);
    let name = n.name;
    let x = this.appService.itemlist.find(x => x.name ===name);
    n.price = x?.price;
  }

}

