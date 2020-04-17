import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MerchantProfilePageRoutingModule } from './merchant-profile-routing.module';

import { MerchantProfilePage } from './merchant-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MerchantProfilePageRoutingModule
  ],
  declarations: [MerchantProfilePage]
})
export class MerchantProfilePageModule {}
