import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletTopupHowtoBankSelectPage } from './wallet-topup-howto-bank-select.page';

const routes: Routes = [
  {
    path: '',
    component: WalletTopupHowtoBankSelectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletTopupHowtoBankSelectPageRoutingModule {}
