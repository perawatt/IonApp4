import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MerchantEditNamePageRoutingModule } from './merchant-edit-name-routing.module';

import { MerchantEditNamePage } from './merchant-edit-name.page';
import { DirectivesModule } from 'src/directives/directives.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    DirectivesModule,
    MerchantEditNamePageRoutingModule
  ],
  declarations: [MerchantEditNamePage]
})
export class MerchantEditNamePageModule {}
