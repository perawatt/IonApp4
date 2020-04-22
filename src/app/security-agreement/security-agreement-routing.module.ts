import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecurityAgreementPage } from './security-agreement.page';

const routes: Routes = [
  {
    path: '',
    component: SecurityAgreementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecurityAgreementPageRoutingModule {}
