import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletTopupDetailByMtmInfoPageRoutingModule } from './wallet-topup-detail-by-mtm-info-routing.module';

import { WalletTopupDetailByMtmInfoPage } from './wallet-topup-detail-by-mtm-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletTopupDetailByMtmInfoPageRoutingModule
  ],
  declarations: [WalletTopupDetailByMtmInfoPage]
})
export class WalletTopupDetailByMtmInfoPageModule {}
