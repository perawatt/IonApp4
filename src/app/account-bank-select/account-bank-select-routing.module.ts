import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountBankSelectPage } from './account-bank-select.page';

const routes: Routes = [
  {
    path: '',
    component: AccountBankSelectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountBankSelectPageRoutingModule {}
