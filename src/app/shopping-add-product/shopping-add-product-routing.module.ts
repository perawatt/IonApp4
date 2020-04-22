import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingAddProductPage } from './shopping-add-product.page';

const routes: Routes = [
  {
    path: '',
    component: ShoppingAddProductPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppingAddProductPageRoutingModule {}
