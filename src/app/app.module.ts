import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { CategoriesComponent } from './categories/categories.component';
import {AppRoutingModule} from './app-routing.module';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductAlertsComponent,
    ProductItemComponent,
    CategoriesComponent,
    CategoryDetailComponent,
    ProductDetailComponent,
  ],
  exports: [
    ProductItemComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
