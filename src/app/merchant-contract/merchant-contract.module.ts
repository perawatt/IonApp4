import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MerchantContractPageRoutingModule } from './merchant-contract-routing.module';

import { MerchantContractPage } from './merchant-contract.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MerchantContractPageRoutingModule
  ],
  declarations: [MerchantContractPage]
})
export class MerchantContractPageModule {}
