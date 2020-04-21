import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReminderFormPageRoutingModule } from './reminder-form-routing.module';

import { ReminderFormPage } from './reminder-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ReminderFormPageRoutingModule
  ],
  declarations: [ReminderFormPage]
})
export class ReminderFormPageModule {}
