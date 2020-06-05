import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MerchantPhonePageRoutingModule } from './merchant-phone-routing.module';

import { MerchantPhonePage } from './merchant-phone.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MerchantPhonePageRoutingModule
  ],
  declarations: [MerchantPhonePage]
})
export class MerchantPhonePageModule {}
