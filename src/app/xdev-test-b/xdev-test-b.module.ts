import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { XdevTestBPageRoutingModule } from './xdev-test-b-routing.module';

import { XdevTestBPage } from './xdev-test-b.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    XdevTestBPageRoutingModule
  ],
  declarations: [XdevTestBPage]
})
export class XdevTestBPageModule {}
