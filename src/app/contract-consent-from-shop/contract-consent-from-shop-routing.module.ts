import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContractConsentFromShopPage } from './contract-consent-from-shop.page';

const routes: Routes = [
  {
    path: '',
    component: ContractConsentFromShopPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContractConsentFromShopPageRoutingModule {}
