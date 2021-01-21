import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountConfirmPpayPage } from './account-confirm-ppay.page';

const routes: Routes = [
  {
    path: '',
    component: AccountConfirmPpayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountConfirmPpayPageRoutingModule {}
