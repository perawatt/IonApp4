import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { XdevTestCPage } from './xdev-test-c.page';

const routes: Routes = [
  {
    path: '',
    component: XdevTestCPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class XdevTestCPageRoutingModule {}
