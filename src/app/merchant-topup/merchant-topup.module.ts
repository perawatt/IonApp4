import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MerchantTopupPageRoutingModule } from './merchant-topup-routing.module';

import { MerchantTopupPage } from './merchant-topup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MerchantTopupPageRoutingModule
  ],
  declarations: [MerchantTopupPage]
})
export class MerchantTopupPageModule {}
