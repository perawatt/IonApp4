import { Component, OnInit } from '@angular/core';
import { IonManaLib } from 'ion-m-lib';

@Component({
  selector: 'app-wallet-withdraw',
  templateUrl: './wallet-withdraw.page.html',
  styleUrls: ['./wallet-withdraw.page.scss'],
})
export class WalletWithdrawPage implements OnInit {

  public hasLoaded: string;
  public data$ = Promise.resolve<{}>({});
  private mcontentid = "wallet-withdraw";

  constructor(private svc: IonManaLib) { }

  ionViewDidEnter() {
    this.svc.initPageApi(this.mcontentid);
  }

  ngOnInit() {
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

  public onSelectItem(url: string) {
    this.svc.visitEndpoint(this.mcontentid, url);
  }
}
