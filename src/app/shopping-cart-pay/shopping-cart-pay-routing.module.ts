import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingCartPayPage } from './shopping-cart-pay.page';

const routes: Routes = [
  {
    path: '',
    component: ShoppingCartPayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppingCartPayPageRoutingModule {}
