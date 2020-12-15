import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrackmoneysPageRoutingModule } from './trackmoneys-routing.module';

import { TrackmoneysPage } from './trackmoneys.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrackmoneysPageRoutingModule
  ],
  declarations: [TrackmoneysPage]
})
export class TrackmoneysPageModule {}
