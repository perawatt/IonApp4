import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'user-profile-edit-name',
    loadChildren: () => import('./user-profile-edit-name/user-profile-edit-name.module').then( m => m.UserProfileEditNamePageModule)
  },  {
    path: 'wallet-detail',
    loadChildren: () => import('./wallet-detail/wallet-detail.module').then( m => m.WalletDetailPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
