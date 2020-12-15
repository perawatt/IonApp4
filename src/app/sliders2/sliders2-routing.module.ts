import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Sliders2Page } from './sliders2.page';

const routes: Routes = [
  {
    path: '',
    component: Sliders2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Sliders2PageRoutingModule {}
