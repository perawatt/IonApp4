import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MerchantContractPage } from './merchant-contract.page';

const routes: Routes = [
  {
    path: '',
    component: MerchantContractPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MerchantContractPageRoutingModule {}
