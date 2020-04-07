import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MembershipAgreementPage } from './membership-agreement.page';

const routes: Routes = [
  {
    path: '',
    component: MembershipAgreementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MembershipAgreementPageRoutingModule {}
