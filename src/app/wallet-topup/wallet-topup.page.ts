import { Component, OnInit } from '@angular/core';
import { IonManaLib } from 'ion-m-lib';

@Component({
  selector: 'app-wallet-topup',
  templateUrl: './wallet-topup.page.html',
  styleUrls: ['./wallet-topup.page.scss'],
})
export class WalletTopupPage implements OnInit {

  public hasLoaded: string;
  public data$ = Promise.resolve<{}>({});
  private mcontentid = "wallet-topup";

  constructor(private svc: IonManaLib) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.hasLoaded = null;
    let load$ = this.loadData$();
    this.data$ = load$;
    load$.then(it => {
      this.hasLoaded = (it && it.length > 0) ? "y" : "n";
    });
  }

  private loadData$() {
    return this.svc.initPageApi(this.mcontentid)
      .then(_ => {
        return this.svc.getApiData(this.mcontentid);
      })
  }

  public onSelectGenerateQRTopup() {
    let url = "https://s.manal.ink/np/nwltdqr-home";
    this.svc.visitEndpoint(this.mcontentid, url);
  }

  public onSelectItem(url: string) {
    this.svc.visitEndpoint(this.mcontentid, url);
  }
}
