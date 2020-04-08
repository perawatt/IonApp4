import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EslipReceivePageRoutingModule } from './eslip-receive-routing.module';

import { EslipReceivePage } from './eslip-receive.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EslipReceivePageRoutingModule
  ],
  declarations: [EslipReceivePage]
})
export class EslipReceivePageModule {}
