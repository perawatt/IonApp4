import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserProfileImageEditPage } from './user-profile-image-edit.page';

const routes: Routes = [
  {
    path: '',
    component: UserProfileImageEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserProfileImageEditPageRoutingModule {}
