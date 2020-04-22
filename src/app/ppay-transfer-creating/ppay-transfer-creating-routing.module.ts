import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PpayTransferCreatingPage } from './ppay-transfer-creating.page';

const routes: Routes = [
  {
    path: '',
    component: PpayTransferCreatingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PpayTransferCreatingPageRoutingModule {}
