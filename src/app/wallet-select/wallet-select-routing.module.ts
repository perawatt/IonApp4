import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletSelectPage } from './wallet-select.page';

const routes: Routes = [
  {
    path: '',
    component: WalletSelectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletSelectPageRoutingModule {}
