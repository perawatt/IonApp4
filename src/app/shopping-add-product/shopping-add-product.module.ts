import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShoppingAddProductPageRoutingModule } from './shopping-add-product-routing.module';

import { ShoppingAddProductPage } from './shopping-add-product.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShoppingAddProductPageRoutingModule
  ],
  declarations: [ShoppingAddProductPage]
})
export class ShoppingAddProductPageModule {}
