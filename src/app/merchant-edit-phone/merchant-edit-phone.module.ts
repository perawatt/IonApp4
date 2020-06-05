import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MerchantEditPhonePageRoutingModule } from './merchant-edit-phone-routing.module';

import { MerchantEditPhonePage } from './merchant-edit-phone.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MerchantEditPhonePageRoutingModule
  ],
  declarations: [MerchantEditPhonePage]
})
export class MerchantEditPhonePageModule {}
