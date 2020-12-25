import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletWithdrawPageRoutingModule } from './wallet-withdraw-routing.module';

import { WalletWithdrawPage } from './wallet-withdraw.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletWithdrawPageRoutingModule
  ],
  declarations: [WalletWithdrawPage]
})
export class WalletWithdrawPageModule {}
