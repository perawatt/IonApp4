import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShoppingCartCreatingPayPageRoutingModule } from './shopping-cart-creating-pay-routing.module';

import { ShoppingCartCreatingPayPage } from './shopping-cart-creating-pay.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShoppingCartCreatingPayPageRoutingModule
  ],
  declarations: [ShoppingCartCreatingPayPage]
})
export class ShoppingCartCreatingPayPageModule {}
