import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletTopupHowtoBankDetailPageRoutingModule } from './wallet-topup-howto-bank-detail-routing.module';

import { WalletTopupHowtoBankDetailPage } from './wallet-topup-howto-bank-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletTopupHowtoBankDetailPageRoutingModule
  ],
  declarations: [WalletTopupHowtoBankDetailPage]
})
export class WalletTopupHowtoBankDetailPageModule {}
