import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemoFormDialogPage } from './demo-form-dialog.page';

const routes: Routes = [
  {
    path: '',
    component: DemoFormDialogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemoFormDialogPageRoutingModule {}
