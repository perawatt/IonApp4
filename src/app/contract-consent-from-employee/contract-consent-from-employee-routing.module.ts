import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContractConsentFromEmployeePage } from './contract-consent-from-employee.page';

const routes: Routes = [
  {
    path: '',
    component: ContractConsentFromEmployeePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContractConsentFromEmployeePageRoutingModule {}
