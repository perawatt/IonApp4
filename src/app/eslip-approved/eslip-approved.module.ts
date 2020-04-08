import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EslipApprovedPageRoutingModule } from './eslip-approved-routing.module';

import { EslipApprovedPage } from './eslip-approved.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EslipApprovedPageRoutingModule
  ],
  declarations: [EslipApprovedPage]
})
export class EslipApprovedPageModule {}
