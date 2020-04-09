import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReminderMessagePageRoutingModule } from './reminder-message-routing.module';

import { ReminderMessagePage } from './reminder-message.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReminderMessagePageRoutingModule
  ],
  declarations: [ReminderMessagePage]
})
export class ReminderMessagePageModule {}
