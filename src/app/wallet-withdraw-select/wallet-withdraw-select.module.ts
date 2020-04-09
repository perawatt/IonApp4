import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletWithdrawSelectPageRoutingModule } from './wallet-withdraw-select-routing.module';

import { WalletWithdrawSelectPage } from './wallet-withdraw-select.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletWithdrawSelectPageRoutingModule
  ],
  declarations: [WalletWithdrawSelectPage]
})
export class WalletWithdrawSelectPageModule {}
