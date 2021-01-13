import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletWithdrawBankaccountPageRoutingModule } from './wallet-withdraw-bankaccount-routing.module';

import { WalletWithdrawBankaccountPage } from './wallet-withdraw-bankaccount.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    WalletWithdrawBankaccountPageRoutingModule
  ],
  declarations: [WalletWithdrawBankaccountPage]
})
export class WalletWithdrawBankaccountPageModule {}
