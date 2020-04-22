import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PpayTransferConfirmPage } from './ppay-transfer-confirm.page';

const routes: Routes = [
  {
    path: '',
    component: PpayTransferConfirmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PpayTransferConfirmPageRoutingModule {}
