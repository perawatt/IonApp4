import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EarnProfilePage } from './earn-profile.page';

const routes: Routes = [
  {
    path: '',
    component: EarnProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EarnProfilePageRoutingModule {}
