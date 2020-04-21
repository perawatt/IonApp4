import { Component, OnInit } from '@angular/core';
import { IonManaLib } from 'ion-m-lib';
import { ParseDataProvider } from 'src/providers/parse-data';

@Component({
  selector: 'app-merchant-transaction',
  templateUrl: './merchant-transaction.page.html',
  styleUrls: ['./merchant-transaction.page.scss'],
})
export class MerchantTransactionPage implements OnInit {

  public title = "บัญชีร้าน";
  public hasLoaded: string;
  public data$ = Promise.resolve<{}>({});
  private mcontentid = "merchant-transaction";

  constructor(private svc: IonManaLib, private parse: ParseDataProvider) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.hasLoaded = null;
    let load$ = this.loadData$();
    this.data$ = load$;
    load$.then(it => {
      this.title = it.merchantAccount.name;
      this.svc.initPageApi(this.mcontentid);
      this.hasLoaded = it.transactions && it.transactions.length != 0 ? "y" : "n";
    });
  }

  private loadData$() {
    return this.svc.initPageApi(this.mcontentid)
      .then(_ => {
        return this.svc.getApiData(this.mcontentid);
      })
  }

  doRefresh(event: { complete: () => void; }) {
    setTimeout(() => {
      this.loadData$();
      event.complete();
    }, 500);
  }

  getActionDisplay(txType: string) {
    switch (txType.toLowerCase()) {
      case "deposit": return "เติมเงินเข้าร้าน";
      case "paycart": return "รับเงิน";
      case "withdraw": return "ถอนเงิน";
      case "autowithdraw": return "ถอนเงิน";
      case "payback": return "เงินออก";
      default: return "";
    }
  }

  getActionImage(txType: string) {
    switch (txType.toLowerCase()) {
      case "deposit": return "assets/imgs/txrshoptopup.png";
      case "paycart": return "assets/imgs/txrin.png";
      case "withdraw": return "assets/imgs/txrwithdraw.png";
      case "autowithdraw": return "assets/imgs/txrwithdraw.png";
      case "payback": return "assets/imgs/txrout.png";
      default: return "";
    }
  }

  visitEndpoint(url) {
    this.svc.visitEndpoint(this.mcontentid, url);
  }

  public ParseToTwoDecimal(value: number) { return this.parse.ParseToTwoDecimal(value); }
}
