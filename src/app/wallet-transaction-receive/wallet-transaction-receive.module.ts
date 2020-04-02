import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletTransactionReceivePageRoutingModule } from './wallet-transaction-receive-routing.module';

import { WalletTransactionReceivePage } from './wallet-transaction-receive.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletTransactionReceivePageRoutingModule
  ],
  declarations: [WalletTransactionReceivePage]
})
export class WalletTransactionReceivePageModule {}
