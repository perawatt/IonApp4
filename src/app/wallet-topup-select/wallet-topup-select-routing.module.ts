import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletTopupSelectPage } from './wallet-topup-select.page';

const routes: Routes = [
  {
    path: '',
    component: WalletTopupSelectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletTopupSelectPageRoutingModule {}
