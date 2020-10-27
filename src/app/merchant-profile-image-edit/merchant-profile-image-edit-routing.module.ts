import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MerchantProfileImageEditPage } from './merchant-profile-image-edit.page';

const routes: Routes = [
  {
    path: '',
    component: MerchantProfileImageEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MerchantProfileImageEditPageRoutingModule {}
