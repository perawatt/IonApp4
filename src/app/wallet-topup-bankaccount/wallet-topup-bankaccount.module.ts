import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletTopupBankaccountPageRoutingModule } from './wallet-topup-bankaccount-routing.module';

import { WalletTopupBankaccountPage } from './wallet-topup-bankaccount.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    WalletTopupBankaccountPageRoutingModule
  ],
  declarations: [WalletTopupBankaccountPage]
})
export class WalletTopupBankaccountPageModule {}
