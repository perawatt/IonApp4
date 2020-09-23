import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartAdhocCreatingPage } from './cart-adhoc-creating.page';

const routes: Routes = [
  {
    path: '',
    component: CartAdhocCreatingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartAdhocCreatingPageRoutingModule {}
