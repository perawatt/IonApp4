import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShortcutListPageRoutingModule } from './shortcut-list-routing.module';

import { ShortcutListPage } from './shortcut-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShortcutListPageRoutingModule
  ],
  declarations: [ShortcutListPage]
})
export class ShortcutListPageModule {}
