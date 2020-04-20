import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { XdevTestBPage } from './xdev-test-b.page';

const routes: Routes = [
  {
    path: '',
    component: XdevTestBPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class XdevTestBPageRoutingModule {}
