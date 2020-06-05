import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MerchantContractIncomePageRoutingModule } from './merchant-contract-income-routing.module';

import { MerchantContractIncomePage } from './merchant-contract-income.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MerchantContractIncomePageRoutingModule
  ],
  declarations: [MerchantContractIncomePage]
})
export class MerchantContractIncomePageModule {}
