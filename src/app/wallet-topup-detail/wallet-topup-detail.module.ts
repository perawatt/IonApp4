import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletTopupDetailPageRoutingModule } from './wallet-topup-detail-routing.module';

import { WalletTopupDetailPage } from './wallet-topup-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletTopupDetailPageRoutingModule
  ],
  declarations: [WalletTopupDetailPage]
})
export class WalletTopupDetailPageModule {}
