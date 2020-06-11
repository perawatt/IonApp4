import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContractConsentFromEmployeePageRoutingModule } from './contract-consent-from-employee-routing.module';

import { ContractConsentFromEmployeePage } from './contract-consent-from-employee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContractConsentFromEmployeePageRoutingModule
  ],
  declarations: [ContractConsentFromEmployeePage]
})
export class ContractConsentFromEmployeePageModule {}
