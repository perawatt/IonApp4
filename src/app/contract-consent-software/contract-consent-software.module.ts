import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContractConsentSoftwarePageRoutingModule } from './contract-consent-software-routing.module';

import { ContractConsentSoftwarePage } from './contract-consent-software.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContractConsentSoftwarePageRoutingModule
  ],
  declarations: [ContractConsentSoftwarePage]
})
export class ContractConsentSoftwarePageModule {}
