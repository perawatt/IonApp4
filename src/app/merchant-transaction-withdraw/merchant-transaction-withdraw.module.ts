import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MerchantTransactionWithdrawPageRoutingModule } from './merchant-transaction-withdraw-routing.module';

import { MerchantTransactionWithdrawPage } from './merchant-transaction-withdraw.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MerchantTransactionWithdrawPageRoutingModule
  ],
  declarations: [MerchantTransactionWithdrawPage]
})
export class MerchantTransactionWithdrawPageModule {}
