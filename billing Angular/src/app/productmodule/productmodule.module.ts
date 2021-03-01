import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import { ProductComponent } from '../product/product.component';



@NgModule({
  declarations: [ ProductComponent  ],
  imports: [ CommonModule, MatInputModule ],
  exports: [ ProductComponent ]
})
export class ProductModule { }



