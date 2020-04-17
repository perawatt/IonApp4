import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MerchantTransactionExpensePage } from './merchant-transaction-expense.page';

const routes: Routes = [
  {
    path: '',
    component: MerchantTransactionExpensePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MerchantTransactionExpensePageRoutingModule {}
