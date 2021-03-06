import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { ItemModule } from './item/item.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { AppService } from './app.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MatSliderModule,
    ItemModule,
    BrowserModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
