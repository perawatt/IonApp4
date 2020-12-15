import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SlidersdetailPageRoutingModule } from './slidersdetail-routing.module';

import { SlidersdetailPage } from './slidersdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SlidersdetailPageRoutingModule
  ],
  declarations: [SlidersdetailPage]
})
export class SlidersdetailPageModule {}
