import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'user-profile-edit-name',
    loadChildren: () => import('./user-profile-edit-name/user-profile-edit-name.module').then( m => m.UserProfileEditNamePageModule)
  },
  {
    path: 'wallet-transaction-receive',
    loadChildren: () => import('./wallet-transaction-receive/wallet-transaction-receive.module').then( m => m.WalletTransactionReceivePageModule)
  },
  {
    path: 'wallet-detail',
    loadChildren: () => import('./wallet-detail/wallet-detail.module').then( m => m.WalletDetailPageModule)
  },
  {
    path: 'home-feed',
    loadChildren: () => import('./home-feed/home-feed.module').then( m => m.HomeFeedPageModule)
  },
  {
    path: 'membership-shop-select',
    loadChildren: () => import('./membership-shop-select/membership-shop-select.module').then( m => m.MembershipShopSelectPageModule)
  },
  {
    path: 'financial-menu',
    loadChildren: () => import('./financial-menu/financial-menu.module').then( m => m.FinancialMenuPageModule)
  },
  {
    path: 'membership-agreement',
    loadChildren: () => import('./membership-agreement/membership-agreement.module').then( m => m.MembershipAgreementPageModule)
  },
  {
    path: 'shopping-cart',
    loadChildren: () => import('./shopping-cart/shopping-cart.module').then( m => m.ShoppingCartPageModule)
  },
  {
    path: 'shopping-cart-creating',
    loadChildren: () => import('./shopping-cart-creating/shopping-cart-creating.module').then( m => m.ShoppingCartCreatingPageModule)
  },
  {
    path: 'shopping-cart-into',
    loadChildren: () => import('./shopping-cart-into/shopping-cart-into.module').then( m => m.ShoppingCartIntoPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
