import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletTransactionPpayPaymentPageRoutingModule } from './wallet-transaction-ppay-payment-routing.module';

import { WalletTransactionPpayPaymentPage } from './wallet-transaction-ppay-payment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletTransactionPpayPaymentPageRoutingModule
  ],
  declarations: [WalletTransactionPpayPaymentPage]
})
export class WalletTransactionPpayPaymentPageModule {}
