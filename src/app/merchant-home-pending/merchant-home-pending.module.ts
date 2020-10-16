import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MerchantHomePendingPageRoutingModule } from './merchant-home-pending-routing.module';

import { MerchantHomePendingPage } from './merchant-home-pending.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MerchantHomePendingPageRoutingModule
  ],
  declarations: [MerchantHomePendingPage]
})
export class MerchantHomePendingPageModule {}
