import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletTopupBankaccountConfirmPageRoutingModule } from './wallet-topup-bankaccount-confirm-routing.module';

import { WalletTopupBankaccountConfirmPage } from './wallet-topup-bankaccount-confirm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletTopupBankaccountConfirmPageRoutingModule
  ],
  declarations: [WalletTopupBankaccountConfirmPage]
})
export class WalletTopupBankaccountConfirmPageModule {}
