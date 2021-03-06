import { AfterViewInit, Component, OnDestroy, OnInit } from "@angular/core";
import { AppService } from "../app.service";

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss']
})
export class ItemComponent {
    name = "";
    price = 0;
    constructor(
        public appService: AppService
    ) {

    }

    addItem() {
        this.appService.itemlist.push({
            name: this.name,
            price: this.price
        });
    }
}