import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MerchantAddPhonePage } from './merchant-add-phone.page';

const routes: Routes = [
  {
    path: '',
    component: MerchantAddPhonePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MerchantAddPhonePageRoutingModule {}
