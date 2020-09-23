import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletTopupCompletedPage } from './wallet-topup-completed.page';

const routes: Routes = [
  {
    path: '',
    component: WalletTopupCompletedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletTopupCompletedPageRoutingModule {}
