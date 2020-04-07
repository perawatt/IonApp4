import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingCartIntoPage } from './shopping-cart-into.page';

const routes: Routes = [
  {
    path: '',
    component: ShoppingCartIntoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppingCartIntoPageRoutingModule {}
