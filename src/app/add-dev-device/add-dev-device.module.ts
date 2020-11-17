import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddDevDevicePageRoutingModule } from './add-dev-device-routing.module';

import { AddDevDevicePage } from './add-dev-device.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AddDevDevicePageRoutingModule
  ],
  declarations: [AddDevDevicePage]
})
export class AddDevDevicePageModule {}
