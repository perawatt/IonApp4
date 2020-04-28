import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wallet-transaction-ppay-transfer',
  templateUrl: './wallet-transaction-ppay-transfer.page.html',
  styleUrls: ['./wallet-transaction-ppay-transfer.page.scss'],
})
export class WalletTransactionPpayTransferPage implements OnInit {

  public hasLoaded: string;
  public data$;
  private mcontentid: string = "wallet-transaction-ppay-transfer";
  constructor() { }

  ngOnInit() {
  }

}
