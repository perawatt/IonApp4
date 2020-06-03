import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GpsaddressSelectPageRoutingModule } from './gpsaddress-select-routing.module';

import { GpsaddressSelectPage } from './gpsaddress-select.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GpsaddressSelectPageRoutingModule
  ],
  declarations: [GpsaddressSelectPage]
})
export class GpsaddressSelectPageModule {}
