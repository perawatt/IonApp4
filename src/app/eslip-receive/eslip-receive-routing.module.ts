import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EslipReceivePage } from './eslip-receive.page';

const routes: Routes = [
  {
    path: '',
    component: EslipReceivePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EslipReceivePageRoutingModule {}
