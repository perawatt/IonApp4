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
    path: 'user-account',
    loadChildren: () => import('./user-account/user-account.module').then( m => m.UserAccountPageModule)
  },
  {
    path: 'user-profile',
    loadChildren: () => import('./user-profile/user-profile.module').then( m => m.UserProfilePageModule)
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
  },  {
    path: 'user-profile-address',
    loadChildren: () => import('./user-profile-address/user-profile-address.module').then( m => m.UserProfileAddressPageModule)
  },
  {
    path: 'user-profile-edit-address',
    loadChildren: () => import('./user-profile-edit-address/user-profile-edit-address.module').then( m => m.UserProfileEditAddressPageModule)
  },
  {
    path: 'user-profile-new-address',
    loadChildren: () => import('./user-profile-new-address/user-profile-new-address.module').then( m => m.UserProfileNewAddressPageModule)
  },
  {
    path: 'shopping-cart-creating-add-coupons',
    loadChildren: () => import('./shopping-cart-creating-add-coupons/shopping-cart-creating-add-coupons.module').then( m => m.ShoppingCartCreatingAddCouponsPageModule)
  },
  {
    path: 'shopping-cart-creating-add-points',
    loadChildren: () => import('./shopping-cart-creating-add-points/shopping-cart-creating-add-points.module').then( m => m.ShoppingCartCreatingAddPointsPageModule)
  },
  {
    path: 'eslip-select',
    loadChildren: () => import('./eslip-select/eslip-select.module').then( m => m.EslipSelectPageModule)
  },
  {
    path: 'eslip-shop-select',
    loadChildren: () => import('./eslip-shop-select/eslip-shop-select.module').then( m => m.EslipShopSelectPageModule)
  },
  {
    path: 'eslip-approved',
    loadChildren: () => import('./eslip-approved/eslip-approved.module').then( m => m.EslipApprovedPageModule)
  },
  {
    path: 'eslip-receive',
    loadChildren: () => import('./eslip-receive/eslip-receive.module').then( m => m.EslipReceivePageModule)
  },
  {
    path: 'eslip-use',
    loadChildren: () => import('./eslip-use/eslip-use.module').then( m => m.EslipUsePageModule)
  },
  {
    path: 'eslip-wait-approve',
    loadChildren: () => import('./eslip-wait-approve/eslip-wait-approve.module').then( m => m.EslipWaitApprovePageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
