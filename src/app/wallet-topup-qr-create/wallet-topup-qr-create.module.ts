import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletTopupQrCreatePageRoutingModule } from './wallet-topup-qr-create-routing.module';

import { WalletTopupQrCreatePage } from './wallet-topup-qr-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    WalletTopupQrCreatePageRoutingModule
  ],
  declarations: [WalletTopupQrCreatePage]
})
export class WalletTopupQrCreatePageModule {}
