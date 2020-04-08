import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletTransactionWithdrawPageRoutingModule } from './wallet-transaction-withdraw-routing.module';

import { WalletTransactionWithdrawPage } from './wallet-transaction-withdraw.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletTransactionWithdrawPageRoutingModule
  ],
  declarations: [WalletTransactionWithdrawPage]
})
export class WalletTransactionWithdrawPageModule {}
