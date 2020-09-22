import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingCartCreatingCompletedPage } from './shopping-cart-creating-completed.page';

const routes: Routes = [
  {
    path: '',
    component: ShoppingCartCreatingCompletedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppingCartCreatingCompletedPageRoutingModule {}
