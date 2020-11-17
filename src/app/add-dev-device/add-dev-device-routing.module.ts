import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddDevDevicePage } from './add-dev-device.page';

const routes: Routes = [
  {
    path: '',
    component: AddDevDevicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddDevDevicePageRoutingModule {}
