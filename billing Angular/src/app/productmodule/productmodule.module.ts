import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import { ProductComponent } from '../product/product.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [ ProductComponent  ],
  imports: [ CommonModule, MatInputModule, MatButtonModule],
  exports: [ ProductComponent ]
})
export class ProductModule { }



