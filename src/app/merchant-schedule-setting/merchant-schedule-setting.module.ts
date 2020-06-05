import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MerchantScheduleSettingPageRoutingModule } from './merchant-schedule-setting-routing.module';

import { MerchantScheduleSettingPage } from './merchant-schedule-setting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    MerchantScheduleSettingPageRoutingModule
  ],
  declarations: [MerchantScheduleSettingPage]
})
export class MerchantScheduleSettingPageModule {}
