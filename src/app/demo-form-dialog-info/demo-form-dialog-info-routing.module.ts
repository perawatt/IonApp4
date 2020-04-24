import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemoFormDialogInfoPage } from './demo-form-dialog-info.page';

const routes: Routes = [
  {
    path: '',
    component: DemoFormDialogInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemoFormDialogInfoPageRoutingModule {}
