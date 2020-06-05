import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MerchantEditNamePage } from './merchant-edit-name.page';

const routes: Routes = [
  {
    path: '',
    component: MerchantEditNamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MerchantEditNamePageRoutingModule {}
