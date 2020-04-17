import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MerchantBusinessExpensePage } from './merchant-business-expense.page';

const routes: Routes = [
  {
    path: '',
    component: MerchantBusinessExpensePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MerchantBusinessExpensePageRoutingModule {}
