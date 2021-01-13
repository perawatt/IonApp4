import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SlidersdetailPage } from './slidersdetail.page';

const routes: Routes = [
  {
    path: '',
    component: SlidersdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SlidersdetailPageRoutingModule {}
