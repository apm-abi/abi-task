import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillingpageComponent } from '../billingpage/billingpage.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [BillingpageComponent],
  imports: [
    CommonModule, FormsModule, MatButtonModule
  ],
  exports: [BillingpageComponent]
})
export class BillingmoduleModule { }
