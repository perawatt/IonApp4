import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GpsaddressSelectLocationPageRoutingModule } from './gpsaddress-select-location-routing.module';

import { GpsaddressSelectLocationPage } from './gpsaddress-select-location.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GpsaddressSelectLocationPageRoutingModule
  ],
  declarations: [GpsaddressSelectLocationPage]
})
export class GpsaddressSelectLocationPageModule {}
