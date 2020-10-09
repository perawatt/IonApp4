import { Component, OnInit } from '@angular/core';
import { IonManaLib } from 'ion-m-lib';
import { ParseDataProvider } from 'src/providers/parse-data';

@Component({
  selector: 'app-wallet-detail',
  templateUrl: './wallet-detail.page.html',
  styleUrls: ['./wallet-detail.page.scss'],
})
export class WalletDetailPage implements OnInit {

  public hasLoaded: string;
  public data$ = Promise.resolve<{}>({});
  private mcontentid = "wallet-detail";

  constructor(private svc: IonManaLib, private parse: ParseDataProvider) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.refreshCallBack();
  }

  private loadData$() {
    return this.svc.initPageApiWithCallBack(this.mcontentid, () => this.refreshCallBack())
      .then(_ => {
        return this.svc.getApiData(this.mcontentid);
      })
  }

  private refreshCallBack() {
    this.hasLoaded = null;
    let load$ = this.loadData$();
    this.data$ = load$;
    load$.then(it => {
      this.hasLoaded = (it && it.walletTransactionInfos.length > 0) ? "y" : "n";
    });
  }

  getActionDisplay(txType: string) {
    switch (txType.toLowerCase()) {
      case "paycart": return "ซื้อของ";
      case "payment": return "ซื้อของ";
      case "ppaypayment": return "ซื้อของ";
      case "adhoc": return "ซื้อของ";
      case "payback": return "เงินเข้าบัญชี";
      case "deposit": return "เติมเงิน";
      case "withdraw": return "ถอนเงิน";
      case "receivemoney": return "เงินเข้าบัญชี";
      case "withdraw2mct": return "โอนเงิน";
      case "withdrawfrommct": return "เงินเข้าบัญชี";
      default: return "";
    }
  }
  
  getActionImage(txType: string) {
    switch (txType.toLowerCase()) {
      case "paycart": return "assets/imgs/txshop.png";
      case "payment": return "assets/imgs/txshop.png";
      case "ppaypayment": return "assets/imgs/txshop.png";
      case "adhoc": return "assets/imgs/txshop.png";
      case "payback": return "assets/imgs/txrin.png";
      case "deposit": return "assets/imgs/txdeposit.png";
      case "withdraw": return "assets/imgs/txwithdraw.png";
      case "receivemoney": return "assets/imgs/txrin.png";
      case "withdraw2mct": return "assets/imgs/txrout.png";
      case "withdrawfrommct": return "assets/imgs/txrin.png";
      default: return "";
    }
  }

  public showDetail(endpoint: string) {
    this.svc.visitEndpoint(this.mcontentid, endpoint);
  }

  public ParseToTwoDecimal(value: number) { return this.parse.ParseToTwoDecimal(value); }
}
