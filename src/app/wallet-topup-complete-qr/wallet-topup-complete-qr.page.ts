import { Component, OnInit } from '@angular/core';
import { IonManaLib } from 'ion-m-lib';

@Component({
  selector: 'app-wallet-topup-complete-qr',
  templateUrl: './wallet-topup-complete-qr.page.html',
  styleUrls: ['./wallet-topup-complete-qr.page.scss'],
})
export class WalletTopupCompleteQrPage implements OnInit {

  public hasLoaded: string;
  public data$ = Promise.resolve<{}>({});
  private mcontentid = "wallet-topup-complete-qr";

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

  onSelectOpenBankApp() {
    // let url = "<some url here>";
    // this.svc.visitEndpoint(this.mcontentid, url);
  }

}
