import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { XdevTestCPageRoutingModule } from './xdev-test-c-routing.module';

import { XdevTestCPage } from './xdev-test-c.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    XdevTestCPageRoutingModule
  ],
  declarations: [XdevTestCPage]
})
export class XdevTestCPageModule {}
