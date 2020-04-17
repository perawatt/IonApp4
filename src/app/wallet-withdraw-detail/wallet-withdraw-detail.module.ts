import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletWithdrawDetailPageRoutingModule } from './wallet-withdraw-detail-routing.module';

import { WalletWithdrawDetailPage } from './wallet-withdraw-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    WalletWithdrawDetailPageRoutingModule
  ],
  declarations: [WalletWithdrawDetailPage]
})
export class WalletWithdrawDetailPageModule {}
