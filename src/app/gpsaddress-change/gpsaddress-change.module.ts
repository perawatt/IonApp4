import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GpsaddressChangePageRoutingModule } from './gpsaddress-change-routing.module';

import { GpsaddressChangePage } from './gpsaddress-change.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    GpsaddressChangePageRoutingModule
  ],
  declarations: [GpsaddressChangePage]
})
export class GpsaddressChangePageModule {}
