import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MerchantProfileImageEditPageRoutingModule } from './merchant-profile-image-edit-routing.module';

import { MerchantProfileImageEditPage } from './merchant-profile-image-edit.page';
import { DirectivesModule } from 'src/directives/directives.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    DirectivesModule,
    MerchantProfileImageEditPageRoutingModule
  ],
  declarations: [MerchantProfileImageEditPage]
})
export class MerchantProfileImageEditPageModule {}
