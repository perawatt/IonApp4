import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserProfileNewAddressPage } from './user-profile-new-address.page';

const routes: Routes = [
  {
    path: '',
    component: UserProfileNewAddressPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserProfileNewAddressPageRoutingModule {}
