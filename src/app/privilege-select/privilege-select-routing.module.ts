import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrivilegeSelectPage } from './privilege-select.page';

const routes: Routes = [
  {
    path: '',
    component: PrivilegeSelectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivilegeSelectPageRoutingModule {}
