import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MerchantTopupConfirmPage } from './merchant-topup-confirm.page';

const routes: Routes = [
  {
    path: '',
    component: MerchantTopupConfirmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MerchantTopupConfirmPageRoutingModule {}
