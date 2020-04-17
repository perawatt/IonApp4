import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MerchantTopupPage } from './merchant-topup.page';

const routes: Routes = [
  {
    path: '',
    component: MerchantTopupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MerchantTopupPageRoutingModule {}
