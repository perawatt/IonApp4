import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountCreatePpayPage } from './account-create-ppay.page';

const routes: Routes = [
  {
    path: '',
    component: AccountCreatePpayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountCreatePpayPageRoutingModule {}
