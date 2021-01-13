import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrackdetailPageRoutingModule } from './trackdetail-routing.module';

import { TrackdetailPage } from './trackdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrackdetailPageRoutingModule
  ],
  declarations: [TrackdetailPage]
})
export class TrackdetailPageModule {}
