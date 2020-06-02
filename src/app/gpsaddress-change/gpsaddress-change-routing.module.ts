import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GpsaddressChangePage } from './gpsaddress-change.page';

const routes: Routes = [
  {
    path: '',
    component: GpsaddressChangePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GpsaddressChangePageRoutingModule {}
