import { Component, OnInit } from '@angular/core';
import { IonManaLib } from 'ion-m-lib';
import { ParseDataProvider } from 'src/providers/parse-data';

@Component({
  selector: 'app-financial-menu',
  templateUrl: './financial-menu.page.html',
  styleUrls: ['./financial-menu.page.scss'],
})
export class FinancialMenuPage implements OnInit {

  public hasLoaded: string;
  public data$;
  private mcontentid: string = "financial-menu";
  constructor(private svc: IonManaLib, private parse: ParseDataProvider) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.refreshCallBack()
  }

  private loadData$() {
    return this.svc.initPageApiWithCallBack(this.mcontentid, () => this.refreshCallBack())
      .then(_ => {
        return this.svc.getApiData(this.mcontentid);
      })
  }

  private refreshCallBack()
  {
    this.hasLoaded = null;
    let load$ = this.loadData$();
    this.data$ = load$;
    load$.then(it => {
      this.hasLoaded = it ? "y" : "n";
    });
  }

  public onDeposit() {
    this.svc.visitEndpoint(this.mcontentid, "https://s.manal.ink/msg/underconstruction");

    // HACK: Demo bank
    // let depositURL = "https://s.manal.ink/np/ndptbnk-";
    // this.svc.visitEndpoint(this.mcontentid, depositURL);
  }

  public onWallets() {
    let id = "nwltlst-home";
    this.svc.visitEndpoint(this.mcontentid, "https://s.manal.ink/wallet/wallets/" + id);
  }

  public onWithdraw() {
    this.svc.visitEndpoint(this.mcontentid, "https://s.manal.ink/msg/underconstruction");
    
    // HACK: Demo bank
    // let withdrawURL = "https://s.manal.ink/np/nwdwbnk-";
    // this.svc.visitEndpoint(this.mcontentid, withdrawURL);
  }

  public onTransfer() {
    this.svc.visitEndpoint(this.mcontentid, "https://s.manal.ink/msg/underconstruction");
  }

  public onManage() {
    this.svc.visitEndpoint(this.mcontentid, "https://s.manal.ink/msg/underconstruction");
  }

  public onCurrentWallet() {
    let id = "nwltdft-home";
    this.svc.visitEndpoint(this.mcontentid, "https://s.manal.ink/wallet/defaultwallet/" + id);
  }

  public ParseToTwoDecimal(value: number) { return this.parse.ParseToTwoDecimal(value); }
}
