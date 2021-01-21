import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletTopupPpayConfirmPageRoutingModule } from './wallet-topup-ppay-confirm-routing.module';

import { WalletTopupPpayConfirmPage } from './wallet-topup-ppay-confirm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletTopupPpayConfirmPageRoutingModule
  ],
  declarations: [WalletTopupPpayConfirmPage]
})
export class WalletTopupPpayConfirmPageModule {}
