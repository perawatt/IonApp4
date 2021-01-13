import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrackmoneysPage } from './trackmoneys.page';

const routes: Routes = [
  {
    path: '',
    component: TrackmoneysPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrackmoneysPageRoutingModule {}
