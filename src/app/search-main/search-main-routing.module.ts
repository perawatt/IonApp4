import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchMainPage } from './search-main.page';

const routes: Routes = [
  {
    path: '',
    component: SearchMainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchMainPageRoutingModule {}
