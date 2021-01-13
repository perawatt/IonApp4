import { Component, OnInit } from '@angular/core';
import { IonManaLib } from 'ion-m-lib';

@Component({
  selector: 'app-wallet-topup-qr-confirm',
  templateUrl: './wallet-topup-qr-confirm.page.html',
  styleUrls: ['./wallet-topup-qr-confirm.page.scss'],
})
export class WalletTopupQrConfirmPage implements OnInit {

  public hasLoaded: string;
  public data$ = Promise.resolve<{}>({});
  private mcontentid = "wallet-topup-qr-confirm";

  constructor(private svc: IonManaLib) { }

  ionViewDidEnter() {
    this.svc.initPageApi(this.mcontentid);
  }

  ngOnInit() {
    this.hasLoaded = null;
    let load$ = this.loadData$();
    this.data$ = load$;
    load$.then(it => {
      this.hasLoaded = it ? "y" : "n";
    });
  }

  private loadData$() {
    return this.svc.initPageApi(this.mcontentid)
      .then(_ => {
        return this.svc.getApiData(this.mcontentid);
      })
  }

}
