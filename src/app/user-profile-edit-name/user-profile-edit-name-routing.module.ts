import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserProfileEditNamePage } from './user-profile-edit-name.page';

const routes: Routes = [
  {
    path: '',
    component: UserProfileEditNamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserProfileEditNamePageRoutingModule {}
