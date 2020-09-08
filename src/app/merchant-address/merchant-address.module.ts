import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MerchantAddressPageRoutingModule } from './merchant-address-routing.module';

import { MerchantAddressPage } from './merchant-address.page';
import { DirectivesModule } from 'src/directives/directives.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    DirectivesModule,
    MerchantAddressPageRoutingModule
  ],
  declarations: [MerchantAddressPage]
})
export class MerchantAddressPageModule {}
