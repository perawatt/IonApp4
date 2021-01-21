import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountConfirmBankaccountPage } from './account-confirm-bankaccount.page';

const routes: Routes = [
  {
    path: '',
    component: AccountConfirmBankaccountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountConfirmBankaccountPageRoutingModule {}
