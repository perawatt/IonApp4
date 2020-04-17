import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MerchantCreatePage } from './merchant-create.page';

const routes: Routes = [
  {
    path: '',
    component: MerchantCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MerchantCreatePageRoutingModule {}
