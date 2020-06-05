import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MerchantEditPhonePage } from './merchant-edit-phone.page';

const routes: Routes = [
  {
    path: '',
    component: MerchantEditPhonePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MerchantEditPhonePageRoutingModule {}
