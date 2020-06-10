import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContractConsentSoftwarePage } from './contract-consent-software.page';

const routes: Routes = [
  {
    path: '',
    component: ContractConsentSoftwarePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContractConsentSoftwarePageRoutingModule {}
