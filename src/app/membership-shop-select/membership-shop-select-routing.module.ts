import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MembershipShopSelectPage } from './membership-shop-select.page';

const routes: Routes = [
  {
    path: '',
    component: MembershipShopSelectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MembershipShopSelectPageRoutingModule {}
