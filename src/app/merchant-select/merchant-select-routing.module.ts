import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MerchantSelectPage } from './merchant-select.page';

const routes: Routes = [
  {
    path: '',
    component: MerchantSelectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MerchantSelectPageRoutingModule {}
