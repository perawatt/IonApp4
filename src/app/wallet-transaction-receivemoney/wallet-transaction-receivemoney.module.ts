import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletTransactionReceivemoneyPageRoutingModule } from './wallet-transaction-receivemoney-routing.module';

import { WalletTransactionReceivemoneyPage } from './wallet-transaction-receivemoney.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletTransactionReceivemoneyPageRoutingModule
  ],
  declarations: [WalletTransactionReceivemoneyPage]
})
export class WalletTransactionReceivemoneyPageModule {}
