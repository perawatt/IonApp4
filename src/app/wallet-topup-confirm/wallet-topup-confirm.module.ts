import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletTopupConfirmPageRoutingModule } from './wallet-topup-confirm-routing.module';

import { WalletTopupConfirmPage } from './wallet-topup-confirm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletTopupConfirmPageRoutingModule
  ],
  declarations: [WalletTopupConfirmPage]
})
export class WalletTopupConfirmPageModule {}
