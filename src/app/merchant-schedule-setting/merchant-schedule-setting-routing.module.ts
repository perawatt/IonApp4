import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MerchantScheduleSettingPage } from './merchant-schedule-setting.page';

const routes: Routes = [
  {
    path: '',
    component: MerchantScheduleSettingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MerchantScheduleSettingPageRoutingModule {}
