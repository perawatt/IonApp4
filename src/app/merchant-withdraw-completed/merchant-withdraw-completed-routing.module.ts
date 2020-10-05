import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MerchantWithdrawCompletedPage } from './merchant-withdraw-completed.page';

const routes: Routes = [
  {
    path: '',
    component: MerchantWithdrawCompletedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MerchantWithdrawCompletedPageRoutingModule {}
