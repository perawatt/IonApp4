import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PpayPaymentCreatingPage } from './ppay-payment-creating.page';

const routes: Routes = [
  {
    path: '',
    component: PpayPaymentCreatingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PpayPaymentCreatingPageRoutingModule {}
