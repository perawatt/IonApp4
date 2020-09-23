import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartAdhocCompletedPage } from './cart-adhoc-completed.page';

const routes: Routes = [
  {
    path: '',
    component: CartAdhocCompletedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartAdhocCompletedPageRoutingModule {}
