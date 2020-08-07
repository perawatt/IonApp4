import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContractConsentFromDeliveryPageRoutingModule } from './contract-consent-from-delivery-routing.module';

import { ContractConsentFromDeliveryPage } from './contract-consent-from-delivery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ContractConsentFromDeliveryPageRoutingModule
  ],
  declarations: [ContractConsentFromDeliveryPage]
})
export class ContractConsentFromDeliveryPageModule {}
