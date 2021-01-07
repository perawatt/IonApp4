import { Component, OnInit } from '@angular/core';
import { IonManaLib } from 'ion-m-lib';

@Component({
  selector: 'app-wallet-topup-complete-qr',
  templateUrl: './wallet-topup-complete-qr.page.html',
  styleUrls: ['./wallet-topup-complete-qr.page.scss'],
})
export class WalletTopupCompleteQrPage implements OnInit {

  private mcontentid = "wallet-topup-complete-qr";

  public title: string = "จ่ายเงิน";
  public data$ = Promise.resolve<{}>({});
  public hasLoaded: string;

  constructor(private svc: IonManaLib) { }

  ngOnInit() {
    this.svc.initPageApi(this.mcontentid);
  }

}
