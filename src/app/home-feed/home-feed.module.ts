import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeFeedPageRoutingModule } from './home-feed-routing.module';

import { HomeFeedPage } from './home-feed.page';
import { ShortcutListPageModule } from '../shortcut-list/shortcut-list.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeFeedPageRoutingModule,
    ShortcutListPageModule
  ],
  declarations: [HomeFeedPage]
})
export class HomeFeedPageModule {}
