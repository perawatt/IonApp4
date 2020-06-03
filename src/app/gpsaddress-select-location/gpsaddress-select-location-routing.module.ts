import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GpsaddressSelectLocationPage } from './gpsaddress-select-location.page';

const routes: Routes = [
  {
    path: '',
    component: GpsaddressSelectLocationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GpsaddressSelectLocationPageRoutingModule {}
