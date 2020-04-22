import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecurityOwnershipCheckPage } from './security-ownership-check.page';

const routes: Routes = [
  {
    path: '',
    component: SecurityOwnershipCheckPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecurityOwnershipCheckPageRoutingModule {}
