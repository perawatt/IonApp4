import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserProfileAddressPage } from './user-profile-address.page';

const routes: Routes = [
  {
    path: '',
    component: UserProfileAddressPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserProfileAddressPageRoutingModule {}
