import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletTransactionWithdrawHTMLPageRoutingModule } from './wallet-transaction-withdraw-html-routing.module';

import { WalletTransactionWithdrawHTMLPage } from './wallet-transaction-withdraw-html.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletTransactionWithdrawHTMLPageRoutingModule
  ],
  declarations: [WalletTransactionWithdrawHTMLPage]
})
export class WalletTransactionWithdrawHTMLPageModule {}
