import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MerchantDepositPageRoutingModule } from './merchant-deposit-routing.module';

import { MerchantDepositPage } from './merchant-deposit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MerchantDepositPageRoutingModule
  ],
  declarations: [MerchantDepositPage]
})
export class MerchantDepositPageModule {}
