import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MerchantTopupConfirmPageRoutingModule } from './merchant-topup-confirm-routing.module';

import { MerchantTopupConfirmPage } from './merchant-topup-confirm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MerchantTopupConfirmPageRoutingModule
  ],
  declarations: [MerchantTopupConfirmPage]
})
export class MerchantTopupConfirmPageModule {}
