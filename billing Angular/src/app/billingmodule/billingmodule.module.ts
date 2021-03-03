import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillingpageComponent } from '../billingpage/billingpage.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [BillingpageComponent],
  imports: [
    CommonModule, FormsModule, MatButtonModule, MatFormFieldModule, MatInputModule
  ],
  exports: [BillingpageComponent]
})
export class BillingmoduleModule { }
