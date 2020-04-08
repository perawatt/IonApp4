import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EslipUsePageRoutingModule } from './eslip-use-routing.module';

import { EslipUsePage } from './eslip-use.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EslipUsePageRoutingModule
  ],
  declarations: [EslipUsePage]
})
export class EslipUsePageModule {}
