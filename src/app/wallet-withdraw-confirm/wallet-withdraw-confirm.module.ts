import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletWithdrawConfirmPageRoutingModule } from './wallet-withdraw-confirm-routing.module';

import { WalletWithdrawConfirmPage } from './wallet-withdraw-confirm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletWithdrawConfirmPageRoutingModule
  ],
  declarations: [WalletWithdrawConfirmPage]
})
export class WalletWithdrawConfirmPageModule {}
