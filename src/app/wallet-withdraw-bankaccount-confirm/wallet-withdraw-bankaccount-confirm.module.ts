import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletWithdrawBankaccountConfirmPageRoutingModule } from './wallet-withdraw-bankaccount-confirm-routing.module';

import { WalletWithdrawBankaccountConfirmPage } from './wallet-withdraw-bankaccount-confirm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletWithdrawBankaccountConfirmPageRoutingModule
  ],
  declarations: [WalletWithdrawBankaccountConfirmPage]
})
export class WalletWithdrawBankaccountConfirmPageModule {}
