import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingCartCreatingAddPointsPage } from './shopping-cart-creating-add-points.page';

const routes: Routes = [
  {
    path: '',
    component: ShoppingCartCreatingAddPointsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppingCartCreatingAddPointsPageRoutingModule {}
