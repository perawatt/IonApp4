import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PpayPaymentCompletedPage } from './ppay-payment-completed.page';

const routes: Routes = [
  {
    path: '',
    component: PpayPaymentCompletedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PpayPaymentCompletedPageRoutingModule {}
