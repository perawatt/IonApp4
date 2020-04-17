import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletTopupDetailPageRoutingModule } from './wallet-topup-detail-routing.module';

import { WalletTopupDetailPage } from './wallet-topup-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    WalletTopupDetailPageRoutingModule
  ],
  declarations: [WalletTopupDetailPage]
})
export class WalletTopupDetailPageModule {}
