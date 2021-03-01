import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import { ProductComponent } from '../product/product.component';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [ ProductComponent  ],
  imports: [ CommonModule, MatInputModule, MatButtonModule, FormsModule, MatTableModule],
  exports: [ ProductComponent ]
})
export class ProductModule { }



