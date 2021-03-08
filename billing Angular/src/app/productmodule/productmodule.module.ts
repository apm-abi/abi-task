import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { RouterModule, Routes } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { BillinglistComponent } from '../billinglist/billinglist.component';
import { BillingpageComponent } from '../billingpage/billingpage.component';
import { ProductComponent } from '../product/product.component';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [];
@NgModule({
  declarations: [ProductComponent, BillingpageComponent,
    BillinglistComponent, HomeComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    RouterModule.forChild(routes),
    FormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  exports: [ProductComponent, BillingpageComponent,
    BillinglistComponent, HomeComponent
  ],
})
export class ProductModule {}
