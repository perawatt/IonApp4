import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SecurityPersonalFormPageRoutingModule } from './security-personal-form-routing.module';

import { SecurityPersonalFormPage } from './security-personal-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SecurityPersonalFormPageRoutingModule
  ],
  declarations: [SecurityPersonalFormPage]
})
export class SecurityPersonalFormPageModule {}
