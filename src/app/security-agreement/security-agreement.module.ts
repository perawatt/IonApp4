import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SecurityAgreementPageRoutingModule } from './security-agreement-routing.module';

import { SecurityAgreementPage } from './security-agreement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SecurityAgreementPageRoutingModule
  ],
  declarations: [SecurityAgreementPage]
})
export class SecurityAgreementPageModule {}
