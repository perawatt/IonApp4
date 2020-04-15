import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletTopupDetailByMtmPageRoutingModule } from './wallet-topup-detail-by-mtm-routing.module';

import { WalletTopupDetailByMtmPage } from './wallet-topup-detail-by-mtm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    WalletTopupDetailByMtmPageRoutingModule
  ],
  declarations: [WalletTopupDetailByMtmPage]
})
export class WalletTopupDetailByMtmPageModule {}
