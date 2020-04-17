import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MerchantQrReceiveMoneyPageRoutingModule } from './merchant-qr-receive-money-routing.module';

import { MerchantQrReceiveMoneyPage } from './merchant-qr-receive-money.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MerchantQrReceiveMoneyPageRoutingModule
  ],
  declarations: [MerchantQrReceiveMoneyPage]
})
export class MerchantQrReceiveMoneyPageModule {}
