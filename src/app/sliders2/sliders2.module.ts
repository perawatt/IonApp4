import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Sliders2PageRoutingModule } from './sliders2-routing.module';

import { Sliders2Page } from './sliders2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Sliders2PageRoutingModule
  ],
  declarations: [Sliders2Page]
})
export class Sliders2PageModule {}
