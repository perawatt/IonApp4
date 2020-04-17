import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MerchantTransactionReceivePageRoutingModule } from './merchant-transaction-receive-routing.module';

import { MerchantTransactionReceivePage } from './merchant-transaction-receive.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MerchantTransactionReceivePageRoutingModule
  ],
  declarations: [MerchantTransactionReceivePage]
})
export class MerchantTransactionReceivePageModule {}
