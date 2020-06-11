import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContractConsentFromShopPageRoutingModule } from './contract-consent-from-shop-routing.module';

import { ContractConsentFromShopPage } from './contract-consent-from-shop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContractConsentFromShopPageRoutingModule
  ],
  declarations: [ContractConsentFromShopPage]
})
export class ContractConsentFromShopPageModule {}
