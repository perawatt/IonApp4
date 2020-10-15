import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletTransactionReceivemoneyHTMLPageRoutingModule } from './wallet-transaction-receivemoney-html-routing.module';

import { WalletTransactionReceivemoneyHTMLPage } from './wallet-transaction-receivemoney-html.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletTransactionReceivemoneyHTMLPageRoutingModule
  ],
  declarations: [WalletTransactionReceivemoneyHTMLPage]
})
export class WalletTransactionReceivemoneyHTMLPageModule {}
