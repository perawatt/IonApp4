import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SecurityOwnershipCheckPageRoutingModule } from './security-ownership-check-routing.module';

import { SecurityOwnershipCheckPage } from './security-ownership-check.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SecurityOwnershipCheckPageRoutingModule
  ],
  declarations: [SecurityOwnershipCheckPage]
})
export class SecurityOwnershipCheckPageModule {}
