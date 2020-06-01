import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EarnHomePage } from './earn-home.page';

const routes: Routes = [
  {
    path: '',
    component: EarnHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EarnHomePageRoutingModule {}
