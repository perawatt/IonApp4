import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GpsSelectAddressPageRoutingModule } from './gps-select-address-routing.module';

import { GpsSelectAddressPage } from './gps-select-address.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GpsSelectAddressPageRoutingModule
  ],
  declarations: [GpsSelectAddressPage]
})
export class GpsSelectAddressPageModule {}
