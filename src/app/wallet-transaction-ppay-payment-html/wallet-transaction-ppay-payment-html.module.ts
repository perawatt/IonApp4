import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletTransactionPPayPaymentHTMLPageRoutingModule } from './wallet-transaction-ppay-payment-html-routing.module';

import { WalletTransactionPPayPaymentHTMLPage } from './wallet-transaction-ppay-payment-html.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletTransactionPPayPaymentHTMLPageRoutingModule
  ],
  declarations: [WalletTransactionPPayPaymentHTMLPage]
})
export class WalletTransactionPPayPaymentHTMLPageModule {}
