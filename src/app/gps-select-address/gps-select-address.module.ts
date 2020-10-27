import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GpsSelectAddressPageRoutingModule } from './gps-select-address-routing.module';

import { GpsSelectAddressPage } from './gps-select-address.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    GpsSelectAddressPageRoutingModule
  ],
  declarations: [GpsSelectAddressPage]
})
export class GpsSelectAddressPageModule {}
