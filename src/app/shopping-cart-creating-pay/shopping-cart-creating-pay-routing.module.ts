import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingCartCreatingPayPage } from './shopping-cart-creating-pay.page';

const routes: Routes = [
  {
    path: '',
    component: ShoppingCartCreatingPayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppingCartCreatingPayPageRoutingModule {}
