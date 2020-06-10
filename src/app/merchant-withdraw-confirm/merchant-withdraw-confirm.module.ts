import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MerchantWithdrawConfirmPageRoutingModule } from './merchant-withdraw-confirm-routing.module';

import { MerchantWithdrawConfirmPage } from './merchant-withdraw-confirm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MerchantWithdrawConfirmPageRoutingModule
  ],
  declarations: [MerchantWithdrawConfirmPage]
})
export class MerchantWithdrawConfirmPageModule {}
