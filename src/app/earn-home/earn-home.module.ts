import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EarnHomePageRoutingModule } from './earn-home-routing.module';

import { EarnHomePage } from './earn-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EarnHomePageRoutingModule
  ],
  declarations: [EarnHomePage]
})
export class EarnHomePageModule {}
