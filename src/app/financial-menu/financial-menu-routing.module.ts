import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinancialMenuPage } from './financial-menu.page';

const routes: Routes = [
  {
    path: '',
    component: FinancialMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinancialMenuPageRoutingModule {}
