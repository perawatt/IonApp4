import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountCreateBankaccountPage } from './account-create-bankaccount.page';

const routes: Routes = [
  {
    path: '',
    component: AccountCreateBankaccountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountCreateBankaccountPageRoutingModule {}
