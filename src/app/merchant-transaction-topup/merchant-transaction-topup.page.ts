import { Component, OnInit } from '@angular/core';
import { IonManaLib } from 'ion-m-lib';
import { ParseDataProvider } from '../../providers/parse-data';

@Component({
  selector: 'app-merchant-transaction-topup',
  templateUrl: './merchant-transaction-topup.page.html',
  styleUrls: ['./merchant-transaction-topup.page.scss'],
})
export class MerchantTransactionTopupPage implements OnInit {

  public hasLoaded: string;
  public data$;
  private mcontentid: string = "merchant-transaction-topup";
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

  public AbsoluteNumber(value: number) { return Math.abs(value); }

  public ParseToTwoDecimal(value: number) { return this.parse.ParseToTwoDecimal(value); }
}
