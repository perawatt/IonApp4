import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wallet-transaction-ppay-payment',
  templateUrl: './wallet-transaction-ppay-payment.page.html',
  styleUrls: ['./wallet-transaction-ppay-payment.page.scss'],
})
export class WalletTransactionPpayPaymentPage implements OnInit {

  public hasLoaded: string;
  public data$;
  private mcontentid: string = "wallet-transaction-ppay-payment";
  constructor() { }

  ngOnInit() {
  }

}
