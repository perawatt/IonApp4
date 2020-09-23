import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletWithdrawCompletedPageRoutingModule } from './wallet-withdraw-completed-routing.module';

import { WalletWithdrawCompletedPage } from './wallet-withdraw-completed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletWithdrawCompletedPageRoutingModule
  ],
  declarations: [WalletWithdrawCompletedPage]
})
export class WalletWithdrawCompletedPageModule {}
