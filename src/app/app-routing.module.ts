import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
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
    path: 'xdev-test',
    loadChildren: () => import('./xdev-test/xdev-test.module').then( m => m.XDevTestPageModule)
  },
  {
    path: 'xdev-test-b',
    loadChildren: () => import('./xdev-test-b/xdev-test-b.module').then( m => m.XdevTestBPageModule)
  },
  {
    path: 'xdev-test-c',
    loadChildren: () => import('./xdev-test-c/xdev-test-c.module').then( m => m.XdevTestCPageModule)
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
    path: 'shopping-cart-info',
    loadChildren: () => import('./shopping-cart-info/shopping-cart-info.module').then( m => m.ShoppingCartInfoPageModule)
  },
  {
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
    path: 'eslip-select/:url',
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
  {
    path: 'wallet-transaction-expense',
    loadChildren: () => import('./wallet-transaction-expense/wallet-transaction-expense.module').then( m => m.WalletTransactionExpensePageModule)
  },
  {
    path: 'wallet-transaction-topup',
    loadChildren: () => import('./wallet-transaction-topup/wallet-transaction-topup.module').then( m => m.WalletTransactionTopupPageModule)
  },
  {
    path: 'wallet-transaction-transfer-bc',
    loadChildren: () => import('./wallet-transaction-transfer-bc/wallet-transaction-transfer-bc.module').then( m => m.WalletTransactionTransferBcPageModule)
  },
  {
    path: 'wallet-transaction-withdraw',
    loadChildren: () => import('./wallet-transaction-withdraw/wallet-transaction-withdraw.module').then( m => m.WalletTransactionWithdrawPageModule)
  },
  {
    path: 'wallet-topup-select',
    loadChildren: () => import('./wallet-topup-select/wallet-topup-select.module').then( m => m.WalletTopupSelectPageModule)
  },
  {
    path: 'wallet-topup-detail',
    loadChildren: () => import('./wallet-topup-detail/wallet-topup-detail.module').then( m => m.WalletTopupDetailPageModule)
  },
  {
    path: 'wallet-topup-confirm',
    loadChildren: () => import('./wallet-topup-confirm/wallet-topup-confirm.module').then( m => m.WalletTopupConfirmPageModule)
  },
  {
    path: 'wallet-topup-detail-by-mtm',
    loadChildren: () => import('./wallet-topup-detail-by-mtm/wallet-topup-detail-by-mtm.module').then( m => m.WalletTopupDetailByMtmPageModule)
  },
  {
    path: 'wallet-topup-detail-by-mtm-info',
    loadChildren: () => import('./wallet-topup-detail-by-mtm-info/wallet-topup-detail-by-mtm-info.module').then( m => m.WalletTopupDetailByMtmInfoPageModule)
  },
  {
    path: 'wallet-withdraw-select',
    loadChildren: () => import('./wallet-withdraw-select/wallet-withdraw-select.module').then( m => m.WalletWithdrawSelectPageModule)
  },
  {
    path: 'wallet-withdraw-detail-by-mtm',
    loadChildren: () => import('./wallet-withdraw-detail-by-mtm/wallet-withdraw-detail-by-mtm.module').then( m => m.WalletWithdrawDetailByMtmPageModule)
  },
  {
    path: 'wallet-withdraw-detail',
    loadChildren: () => import('./wallet-withdraw-detail/wallet-withdraw-detail.module').then( m => m.WalletWithdrawDetailPageModule)
  },
  {
    path: 'wallet-withdraw-confirm',
    loadChildren: () => import('./wallet-withdraw-confirm/wallet-withdraw-confirm.module').then( m => m.WalletWithdrawConfirmPageModule)
  },



  {
    path: 'wallet-select',
    loadChildren: () => import('./wallet-select/wallet-select.module').then( m => m.WalletSelectPageModule)
  },
  {
    path: 'reminder-form',
    loadChildren: () => import('./reminder-form/reminder-form.module').then( m => m.ReminderFormPageModule)
  },
  {
    path: 'reminder-message',
    loadChildren: () => import('./reminder-message/reminder-message.module').then( m => m.ReminderMessagePageModule)
  },
  {
    path: 'merchant-business-expense',
    loadChildren: () => import('./merchant-business-expense/merchant-business-expense.module').then( m => m.MerchantBusinessExpensePageModule)
  },
  {
    path: 'merchant-co-owners',
    loadChildren: () => import('./merchant-co-owners/merchant-co-owners.module').then( m => m.MerchantCoOwnersPageModule)
  },
  {
    path: 'merchant-create',
    loadChildren: () => import('./merchant-create/merchant-create.module').then( m => m.MerchantCreatePageModule)
  },
  {
    path: 'merchant-home',
    loadChildren: () => import('./merchant-home/merchant-home.module').then( m => m.MerchantHomePageModule)
  },
  {
    path: 'merchant-profile',
    loadChildren: () => import('./merchant-profile/merchant-profile.module').then( m => m.MerchantProfilePageModule)
  },
  {
    path: 'merchant-qr-receive-money',
    loadChildren: () => import('./merchant-qr-receive-money/merchant-qr-receive-money.module').then( m => m.MerchantQrReceiveMoneyPageModule)
  },
  {
    path: 'merchant-select',
    loadChildren: () => import('./merchant-select/merchant-select.module').then( m => m.MerchantSelectPageModule)
  },
  {
    path: 'merchant-topup',
    loadChildren: () => import('./merchant-topup/merchant-topup.module').then( m => m.MerchantTopupPageModule)
  },
  {
    path: 'merchant-transaction',
    loadChildren: () => import('./merchant-transaction/merchant-transaction.module').then( m => m.MerchantTransactionPageModule)
  },
  {
    path: 'merchant-transaction-expense',
    loadChildren: () => import('./merchant-transaction-expense/merchant-transaction-expense.module').then( m => m.MerchantTransactionExpensePageModule)
  },
  {
    path: 'merchant-transaction-receive',
    loadChildren: () => import('./merchant-transaction-receive/merchant-transaction-receive.module').then( m => m.MerchantTransactionReceivePageModule)
  },
  {
    path: 'merchant-transaction-topup',
    loadChildren: () => import('./merchant-transaction-topup/merchant-transaction-topup.module').then( m => m.MerchantTransactionTopupPageModule)
  },
  {
    path: 'merchant-transaction-withdraw',
    loadChildren: () => import('./merchant-transaction-withdraw/merchant-transaction-withdraw.module').then( m => m.MerchantTransactionWithdrawPageModule)
  },  {
    path: 'ppay-transfer-creating',
    loadChildren: () => import('./ppay-transfer-creating/ppay-transfer-creating.module').then( m => m.PpayTransferCreatingPageModule)
  },
  {
    path: 'ppay-transfer-confirm',
    loadChildren: () => import('./ppay-transfer-confirm/ppay-transfer-confirm.module').then( m => m.PpayTransferConfirmPageModule)
  },
  {
    path: 'ppay-payment-creating',
    loadChildren: () => import('./ppay-payment-creating/ppay-payment-creating.module').then( m => m.PpayPaymentCreatingPageModule)
  },
  {
    path: 'ppay-payment-confirm',
    loadChildren: () => import('./ppay-payment-confirm/ppay-payment-confirm.module').then( m => m.PpayPaymentConfirmPageModule)
  },
  },
  {
    path: 'wallet-transaction-ppay-transfer',
    loadChildren: () => import('./wallet-transaction-ppay-transfer/wallet-transaction-ppay-transfer.module').then( m => m.WalletTransactionPpayTransferPageModule)
  },
  {
    path: 'wallet-transaction-ppay-payment',
    loadChildren: () => import('./wallet-transaction-ppay-payment/wallet-transaction-ppay-payment.module').then( m => m.WalletTransactionPpayPaymentPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
