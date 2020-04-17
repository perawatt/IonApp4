import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MerchantTransactionTopupPageRoutingModule } from './merchant-transaction-topup-routing.module';

import { MerchantTransactionTopupPage } from './merchant-transaction-topup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MerchantTransactionTopupPageRoutingModule
  ],
  declarations: [MerchantTransactionTopupPage]
})
export class MerchantTransactionTopupPageModule {}
