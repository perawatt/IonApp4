import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserProfileEditAddressPage } from './user-profile-edit-address.page';

const routes: Routes = [
  {
    path: '',
    component: UserProfileEditAddressPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserProfileEditAddressPageRoutingModule {}
