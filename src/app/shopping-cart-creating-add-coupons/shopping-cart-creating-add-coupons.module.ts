import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShoppingCartCreatingAddCouponsPageRoutingModule } from './shopping-cart-creating-add-coupons-routing.module';

import { ShoppingCartCreatingAddCouponsPage } from './shopping-cart-creating-add-coupons.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShoppingCartCreatingAddCouponsPageRoutingModule
  ],
  declarations: [ShoppingCartCreatingAddCouponsPage]
})
export class ShoppingCartCreatingAddCouponsPageModule {}
