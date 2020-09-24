import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MerchantAdditionalPageRoutingModule } from './merchant-additional-routing.module';

import { MerchantAdditionalPage } from './merchant-additional.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    MerchantAdditionalPageRoutingModule
  ],
  declarations: [MerchantAdditionalPage]
})
export class MerchantAdditionalPageModule {}
