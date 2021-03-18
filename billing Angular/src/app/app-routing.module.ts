import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillinglistComponent } from './billinglist/billinglist.component';
import { BillingpageComponent } from './billingpage/billingpage.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  // {
// path: '',
// loadChildren: () => import('./productmodule/productmodule.module').then(x=>x.ProductModule)
// }
{path: '', component: HomeComponent},
 { path: 'product',      component: ProductComponent },
  { path: 'billing-page', component: BillingpageComponent },
  { path: 'billing-list', component: BillinglistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
