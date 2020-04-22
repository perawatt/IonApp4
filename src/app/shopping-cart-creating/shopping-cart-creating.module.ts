import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShoppingCartCreatingPageRoutingModule } from './shopping-cart-creating-routing.module';

import { ShoppingCartCreatingPage } from './shopping-cart-creating.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ShoppingCartCreatingPageRoutingModule
  ],
  declarations: [ShoppingCartCreatingPage]
})
export class ShoppingCartCreatingPageModule {}
