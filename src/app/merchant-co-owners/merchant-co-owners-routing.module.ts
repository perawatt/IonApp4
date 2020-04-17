import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MerchantCoOwnersPage } from './merchant-co-owners.page';

const routes: Routes = [
  {
    path: '',
    component: MerchantCoOwnersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MerchantCoOwnersPageRoutingModule {}
