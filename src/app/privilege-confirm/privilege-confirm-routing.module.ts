import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrivilegeConfirmPage } from './privilege-confirm.page';

const routes: Routes = [
  {
    path: '',
    component: PrivilegeConfirmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivilegeConfirmPageRoutingModule {}
