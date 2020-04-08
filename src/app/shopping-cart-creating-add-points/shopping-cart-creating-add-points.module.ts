import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShoppingCartCreatingAddPointsPageRoutingModule } from './shopping-cart-creating-add-points-routing.module';

import { ShoppingCartCreatingAddPointsPage } from './shopping-cart-creating-add-points.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShoppingCartCreatingAddPointsPageRoutingModule
  ],
  declarations: [ShoppingCartCreatingAddPointsPage]
})
export class ShoppingCartCreatingAddPointsPageModule {}
