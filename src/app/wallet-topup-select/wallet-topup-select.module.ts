import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletTopupSelectPageRoutingModule } from './wallet-topup-select-routing.module';

import { WalletTopupSelectPage } from './wallet-topup-select.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletTopupSelectPageRoutingModule
  ],
  declarations: [WalletTopupSelectPage]
})
export class WalletTopupSelectPageModule {}
