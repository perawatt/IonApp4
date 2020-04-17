import { Component, OnInit } from '@angular/core';
import { IonManaLib } from 'ion-m-lib';
import { ParseDataProvider } from 'src/providers/parse-data';

@Component({
  selector: 'app-wallet-withdraw-confirm',
  templateUrl: './wallet-withdraw-confirm.page.html',
  styleUrls: ['./wallet-withdraw-confirm.page.scss'],
})
export class WalletWithdrawConfirmPage implements OnInit {

  public hasLoaded: string;
  public data$ = Promise.resolve<{}>({});
  private mcontentid = "wallet-withdraw-confirm";
  constructor(private svc: IonManaLib, private parse: ParseDataProvider) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
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

  public ParseToTwoDecimal(value: number) { return this.parse.ParseToTwoDecimal(value); }
}
