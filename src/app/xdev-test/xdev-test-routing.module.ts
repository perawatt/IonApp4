import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { XDevTestPage } from './xdev-test.page';

const routes: Routes = [
  {
    path: '',
    component: XDevTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class XDevTestPageRoutingModule {}
