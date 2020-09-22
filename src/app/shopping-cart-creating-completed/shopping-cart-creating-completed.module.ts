import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShoppingCartCreatingCompletedPageRoutingModule } from './shopping-cart-creating-completed-routing.module';

import { ShoppingCartCreatingCompletedPage } from './shopping-cart-creating-completed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShoppingCartCreatingCompletedPageRoutingModule
  ],
  declarations: [ShoppingCartCreatingCompletedPage]
})
export class ShoppingCartCreatingCompletedPageModule {}
