import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatlistinfoPageRoutingModule } from './chatlistinfo-routing.module';

import { ChatlistinfoPage } from './chatlistinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatlistinfoPageRoutingModule
  ],
  declarations: [ChatlistinfoPage]
})
export class ChatlistinfoPageModule {}
