import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MembershipAgreementPageRoutingModule } from './membership-agreement-routing.module';

import { MembershipAgreementPage } from './membership-agreement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MembershipAgreementPageRoutingModule
  ],
  declarations: [MembershipAgreementPage]
})
export class MembershipAgreementPageModule {}
