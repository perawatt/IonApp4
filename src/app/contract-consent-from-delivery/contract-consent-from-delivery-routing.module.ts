import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContractConsentFromDeliveryPage } from './contract-consent-from-delivery.page';

const routes: Routes = [
  {
    path: '',
    component: ContractConsentFromDeliveryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContractConsentFromDeliveryPageRoutingModule {}
