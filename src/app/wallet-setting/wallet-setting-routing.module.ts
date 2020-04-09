import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletSettingPage } from './wallet-setting.page';

const routes: Routes = [
  {
    path: '',
    component: WalletSettingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletSettingPageRoutingModule {}
