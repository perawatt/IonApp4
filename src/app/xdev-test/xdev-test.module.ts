import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { XDevTestPageRoutingModule } from './xdev-test-routing.module';

import { XDevTestPage } from './xdev-test.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    XDevTestPageRoutingModule
  ],
  declarations: [XDevTestPage]
})
export class XDevTestPageModule {}
