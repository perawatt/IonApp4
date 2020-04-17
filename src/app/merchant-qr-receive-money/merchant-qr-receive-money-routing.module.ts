import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MerchantQrReceiveMoneyPage } from './merchant-qr-receive-money.page';

const routes: Routes = [
  {
    path: '',
    component: MerchantQrReceiveMoneyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MerchantQrReceiveMoneyPageRoutingModule {}
