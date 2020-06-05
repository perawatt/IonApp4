import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MerchantEditCodePage } from './merchant-edit-code.page';

const routes: Routes = [
  {
    path: '',
    component: MerchantEditCodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MerchantEditCodePageRoutingModule {}
