import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MerchantTopupPageRoutingModule } from './merchant-topup-routing.module';

import { MerchantTopupPage } from './merchant-topup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    MerchantTopupPageRoutingModule
  ],
  declarations: [MerchantTopupPage]
})
export class MerchantTopupPageModule {}
