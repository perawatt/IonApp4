import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GpsaddressSelectPage } from './gpsaddress-select.page';

const routes: Routes = [
  {
    path: '',
    component: GpsaddressSelectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GpsaddressSelectPageRoutingModule {}
