import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GpsaddressChangePageRoutingModule } from './gpsaddress-change-routing.module';

import { GpsaddressChangePage } from './gpsaddress-change.page';
import { DirectivesModule } from 'src/directives/directives.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    DirectivesModule,
    GpsaddressChangePageRoutingModule
  ],
  declarations: [GpsaddressChangePage]
})
export class GpsaddressChangePageModule {}
