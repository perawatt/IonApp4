import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShortcutListPage } from './shortcut-list.page';

const routes: Routes = [
  {
    path: '',
    component: ShortcutListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShortcutListPageRoutingModule {}
