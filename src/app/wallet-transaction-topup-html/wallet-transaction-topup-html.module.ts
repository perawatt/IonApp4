import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletTransactionTopupHTMLPageRoutingModule } from './wallet-transaction-topup-html-routing.module';

import { WalletTransactionTopupHTMLPage } from './wallet-transaction-topup-html.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletTransactionTopupHTMLPageRoutingModule
  ],
  declarations: [WalletTransactionTopupHTMLPage]
})
export class WalletTransactionTopupHTMLPageModule {}
