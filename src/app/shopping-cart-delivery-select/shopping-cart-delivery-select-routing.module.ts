import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingCartDeliverySelectPage } from './shopping-cart-delivery-select.page';

const routes: Routes = [
  {
    path: '',
    component: ShoppingCartDeliverySelectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppingCartDeliverySelectPageRoutingModule {}
