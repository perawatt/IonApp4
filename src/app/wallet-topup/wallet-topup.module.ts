import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletTopupPageRoutingModule } from './wallet-topup-routing.module';

import { WalletTopupPage } from './wallet-topup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletTopupPageRoutingModule
  ],
  declarations: [WalletTopupPage]
})
export class WalletTopupPageModule {}
