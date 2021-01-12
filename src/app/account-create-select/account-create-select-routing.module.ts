import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountCreateSelectPage } from './account-create-select.page';

const routes: Routes = [
  {
    path: '',
    component: AccountCreateSelectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountCreateSelectPageRoutingModule {}
