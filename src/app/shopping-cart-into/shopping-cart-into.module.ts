import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShoppingCartIntoPageRoutingModule } from './shopping-cart-into-routing.module';

import { ShoppingCartIntoPage } from './shopping-cart-into.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShoppingCartIntoPageRoutingModule
  ],
  declarations: [ShoppingCartIntoPage]
})
export class ShoppingCartIntoPageModule {}
