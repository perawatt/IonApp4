import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MerchantAddPhonePageRoutingModule } from './merchant-add-phone-routing.module';

import { MerchantAddPhonePage } from './merchant-add-phone.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    MerchantAddPhonePageRoutingModule
  ],
  declarations: [MerchantAddPhonePage]
})
export class MerchantAddPhonePageModule {}
