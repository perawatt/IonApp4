import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MerchantPhonePage } from './merchant-phone.page';

const routes: Routes = [
  {
    path: '',
    component: MerchantPhonePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MerchantPhonePageRoutingModule {}
