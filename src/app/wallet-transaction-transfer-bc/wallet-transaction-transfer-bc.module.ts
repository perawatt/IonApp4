import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletTransactionTransferBcPageRoutingModule } from './wallet-transaction-transfer-bc-routing.module';

import { WalletTransactionTransferBcPage } from './wallet-transaction-transfer-bc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletTransactionTransferBcPageRoutingModule
  ],
  declarations: [WalletTransactionTransferBcPage]
})
export class WalletTransactionTransferBcPageModule {}
