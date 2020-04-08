import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EslipSelectPageRoutingModule } from './eslip-select-routing.module';

import { EslipSelectPage } from './eslip-select.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EslipSelectPageRoutingModule
  ],
  declarations: [EslipSelectPage]
})
export class EslipSelectPageModule {}
