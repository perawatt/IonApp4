import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MerchantHomeBasicPage } from './merchant-home-basic.page';

const routes: Routes = [
  {
    path: '',
    component: MerchantHomeBasicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MerchantHomeBasicPageRoutingModule {}
