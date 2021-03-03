import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { ProductComponent } from '../product/product.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { BillingpageComponent } from '../billingpage/billingpage.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

const routes: Routes = [{ path: 'go to bill', component: BillingpageComponent }];
@NgModule({
  declarations: [ProductComponent, BillingpageComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    RouterModule.forRoot(routes),
    FormsModule,
    MatTableModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  exports: [ProductComponent, BillingpageComponent],
})
export class ProductModule {}
