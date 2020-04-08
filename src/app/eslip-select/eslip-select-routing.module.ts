import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EslipSelectPage } from './eslip-select.page';

const routes: Routes = [
  {
    path: '',
    component: EslipSelectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EslipSelectPageRoutingModule {}
