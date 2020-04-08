import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EslipWaitApprovePageRoutingModule } from './eslip-wait-approve-routing.module';

import { EslipWaitApprovePage } from './eslip-wait-approve.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EslipWaitApprovePageRoutingModule
  ],
  declarations: [EslipWaitApprovePage]
})
export class EslipWaitApprovePageModule {}
