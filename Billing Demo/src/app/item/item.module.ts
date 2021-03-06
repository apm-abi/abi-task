import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppService } from "../app.service";
import { ItemComponent } from "./item.component";

@NgModule({
    declarations: [
        ItemComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        ItemComponent
    ],
    providers: [
        AppService
    ]
})
export class ItemModule { }