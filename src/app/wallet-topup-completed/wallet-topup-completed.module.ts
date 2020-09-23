import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletTopupCompletedPageRoutingModule } from './wallet-topup-completed-routing.module';

import { WalletTopupCompletedPage } from './wallet-topup-completed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletTopupCompletedPageRoutingModule
  ],
  declarations: [WalletTopupCompletedPage]
})
export class WalletTopupCompletedPageModule {}
