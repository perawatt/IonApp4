import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartAdhocPayPage } from './cart-adhoc-pay.page';

const routes: Routes = [
  {
    path: '',
    component: CartAdhocPayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartAdhocPayPageRoutingModule {}
