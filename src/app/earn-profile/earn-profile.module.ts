import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EarnProfilePageRoutingModule } from './earn-profile-routing.module';

import { EarnProfilePage } from './earn-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EarnProfilePageRoutingModule
  ],
  declarations: [EarnProfilePage]
})
export class EarnProfilePageModule {}
