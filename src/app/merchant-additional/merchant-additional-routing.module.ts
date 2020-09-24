import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MerchantAdditionalPage } from './merchant-additional.page';

const routes: Routes = [
  {
    path: '',
    component: MerchantAdditionalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MerchantAdditionalPageRoutingModule {}
