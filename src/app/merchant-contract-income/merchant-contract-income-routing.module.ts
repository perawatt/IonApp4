import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MerchantContractIncomePage } from './merchant-contract-income.page';

const routes: Routes = [
  {
    path: '',
    component: MerchantContractIncomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MerchantContractIncomePageRoutingModule {}
