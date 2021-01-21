import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletTopupPpayPageRoutingModule } from './wallet-topup-ppay-routing.module';

import { WalletTopupPpayPage } from './wallet-topup-ppay.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    WalletTopupPpayPageRoutingModule
  ],
  declarations: [WalletTopupPpayPage]
})
export class WalletTopupPpayPageModule {}
