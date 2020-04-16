import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShoppingCartInfoPageRoutingModule } from './shopping-cart-info-routing.module';

import { ShoppingCartInfoPage } from './shopping-cart-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShoppingCartInfoPageRoutingModule
  ],
  declarations: [ShoppingCartInfoPage]
})
export class ShoppingCartInfoPageModule {}
