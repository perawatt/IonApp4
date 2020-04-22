import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecurityPersonalFormPage } from './security-personal-form.page';

const routes: Routes = [
  {
    path: '',
    component: SecurityPersonalFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecurityPersonalFormPageRoutingModule {}
