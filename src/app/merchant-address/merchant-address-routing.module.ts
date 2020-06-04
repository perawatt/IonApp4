import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MerchantAddressPage } from './merchant-address.page';

const routes: Routes = [
  {
    path: '',
    component: MerchantAddressPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MerchantAddressPageRoutingModule {}
