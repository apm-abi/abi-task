import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductModule } from './productmodule/productmodule.module';
import { BillingmoduleModule } from './billingmodule/billingmodule.module';
import { DummyComponent } from './dummy/dummy.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'dummy', component: DummyComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DummyComponent
  ],
  imports: [
    BrowserModule, FormsModule, CommonModule, ProductModule, BillingmoduleModule,
    MatIconModule, AppRoutingModule, RouterModule.forRoot(routes),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
