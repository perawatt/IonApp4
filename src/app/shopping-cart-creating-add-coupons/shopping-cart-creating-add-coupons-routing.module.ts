import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingCartCreatingAddCouponsPage } from './shopping-cart-creating-add-coupons.page';

const routes: Routes = [
  {
    path: '',
    component: ShoppingCartCreatingAddCouponsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppingCartCreatingAddCouponsPageRoutingModule {}
