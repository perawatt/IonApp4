import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletTransactionTopupPageRoutingModule } from './wallet-transaction-topup-routing.module';

import { WalletTransactionTopupPage } from './wallet-transaction-topup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletTransactionTopupPageRoutingModule
  ],
  declarations: [WalletTransactionTopupPage]
})
export class WalletTransactionTopupPageModule {}
