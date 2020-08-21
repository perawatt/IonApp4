import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MerchantEditPhonePageRoutingModule } from './merchant-edit-phone-routing.module';

import { MerchantEditPhonePage } from './merchant-edit-phone.page';
import { DirectivesModule } from 'src/directives/directives.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    DirectivesModule,
    MerchantEditPhonePageRoutingModule
  ],
  declarations: [MerchantEditPhonePage]
})
export class MerchantEditPhonePageModule {}
