import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletTransactionExpensePage } from './wallet-transaction-expense.page';

const routes: Routes = [
  {
    path: '',
    component: WalletTransactionExpensePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletTransactionExpensePageRoutingModule {}
