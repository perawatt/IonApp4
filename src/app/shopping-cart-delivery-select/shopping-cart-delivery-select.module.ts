import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShoppingCartDeliverySelectPageRoutingModule } from './shopping-cart-delivery-select-routing.module';

import { ShoppingCartDeliverySelectPage } from './shopping-cart-delivery-select.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ShoppingCartDeliverySelectPageRoutingModule
  ],
  declarations: [ShoppingCartDeliverySelectPage]
})
export class ShoppingCartDeliverySelectPageModule {}
