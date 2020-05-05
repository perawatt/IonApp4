import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MerchantWithdrawPageRoutingModule } from './merchant-withdraw-routing.module';

import { MerchantWithdrawPage } from './merchant-withdraw.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    MerchantWithdrawPageRoutingModule
  ],
  declarations: [MerchantWithdrawPage]
})
export class MerchantWithdrawPageModule {}
