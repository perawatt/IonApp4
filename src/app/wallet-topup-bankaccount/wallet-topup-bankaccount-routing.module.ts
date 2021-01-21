import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletTopupBankaccountPage } from './wallet-topup-bankaccount.page';

const routes: Routes = [
  {
    path: '',
    component: WalletTopupBankaccountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletTopupBankaccountPageRoutingModule {}
