import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EarnEditAddressPage } from './earn-edit-address.page';

const routes: Routes = [
  {
    path: '',
    component: EarnEditAddressPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EarnEditAddressPageRoutingModule {}
