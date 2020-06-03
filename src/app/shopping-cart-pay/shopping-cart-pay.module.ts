import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShoppingCartPayPageRoutingModule } from './shopping-cart-pay-routing.module';

import { ShoppingCartPayPage } from './shopping-cart-pay.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShoppingCartPayPageRoutingModule
  ],
  declarations: [ShoppingCartPayPage]
})
export class ShoppingCartPayPageModule {}
