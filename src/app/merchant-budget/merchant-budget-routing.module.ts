import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MerchantBudgetPage } from './merchant-budget.page';

const routes: Routes = [
  {
    path: '',
    component: MerchantBudgetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MerchantBudgetPageRoutingModule {}
