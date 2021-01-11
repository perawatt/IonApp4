import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountMainPage } from './account-main.page';

const routes: Routes = [
  {
    path: '',
    component: AccountMainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountMainPageRoutingModule {}
