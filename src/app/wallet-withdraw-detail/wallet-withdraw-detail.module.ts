import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletWithdrawDetailPageRoutingModule } from './wallet-withdraw-detail-routing.module';

import { WalletWithdrawDetailPage } from './wallet-withdraw-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletWithdrawDetailPageRoutingModule
  ],
  declarations: [WalletWithdrawDetailPage]
})
export class WalletWithdrawDetailPageModule {}
