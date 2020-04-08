import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EslipUsePage } from './eslip-use.page';

const routes: Routes = [
  {
    path: '',
    component: EslipUsePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EslipUsePageRoutingModule {}
