import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrivilegeCartPage } from './privilege-cart.page';

const routes: Routes = [
  {
    path: '',
    component: PrivilegeCartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivilegeCartPageRoutingModule {}
