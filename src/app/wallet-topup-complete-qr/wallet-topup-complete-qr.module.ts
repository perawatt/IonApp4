import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletTopupCompleteQrPageRoutingModule } from './wallet-topup-complete-qr-routing.module';

import { WalletTopupCompleteQrPage } from './wallet-topup-complete-qr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletTopupCompleteQrPageRoutingModule
  ],
  declarations: [WalletTopupCompleteQrPage]
})
export class WalletTopupCompleteQrPageModule {}
