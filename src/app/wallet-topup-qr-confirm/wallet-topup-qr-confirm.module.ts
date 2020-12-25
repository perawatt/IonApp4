import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletTopupQrConfirmPageRoutingModule } from './wallet-topup-qr-confirm-routing.module';

import { WalletTopupQrConfirmPage } from './wallet-topup-qr-confirm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletTopupQrConfirmPageRoutingModule
  ],
  declarations: [WalletTopupQrConfirmPage]
})
export class WalletTopupQrConfirmPageModule {}
