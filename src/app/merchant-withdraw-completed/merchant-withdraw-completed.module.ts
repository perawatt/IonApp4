import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MerchantWithdrawCompletedPageRoutingModule } from './merchant-withdraw-completed-routing.module';

import { MerchantWithdrawCompletedPage } from './merchant-withdraw-completed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MerchantWithdrawCompletedPageRoutingModule
  ],
  declarations: [MerchantWithdrawCompletedPage]
})
export class MerchantWithdrawCompletedPageModule {}
