import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletTransactionPpayTransferPageRoutingModule } from './wallet-transaction-ppay-transfer-routing.module';

import { WalletTransactionPpayTransferPage } from './wallet-transaction-ppay-transfer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletTransactionPpayTransferPageRoutingModule
  ],
  declarations: [WalletTransactionPpayTransferPage]
})
export class WalletTransactionPpayTransferPageModule {}
