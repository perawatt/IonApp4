import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EslipWaitApprovePage } from './eslip-wait-approve.page';

const routes: Routes = [
  {
    path: '',
    component: EslipWaitApprovePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EslipWaitApprovePageRoutingModule {}
