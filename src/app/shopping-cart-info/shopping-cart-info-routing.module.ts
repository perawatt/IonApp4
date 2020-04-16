import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingCartInfoPage } from './shopping-cart-info.page';

const routes: Routes = [
  {
    path: '',
    component: ShoppingCartInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppingCartInfoPageRoutingModule {}
