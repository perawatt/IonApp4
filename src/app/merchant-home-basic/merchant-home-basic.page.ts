import { Component, OnInit } from '@angular/core';
import { IonManaLib } from 'ion-m-lib';
import { ParseDataProvider } from 'src/providers/parse-data';

@Component({
  selector: 'app-merchant-home-basic',
  templateUrl: './merchant-home-basic.page.html',
  styleUrls: ['./merchant-home-basic.page.scss'],
})
export class MerchantHomeBasicPage implements OnInit {

  public title: string = "Shop";
  public hasLoaded: string;
  private mcontentid = "merchant-home-basic";
  public data$ = Promise.resolve<{}>({});
  constructor(private svc: IonManaLib, private parse: ParseDataProvider) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.refreshCallBack();
  }

  private loadData$() {
    return this.svc.initPageApiWithCallBack(this.mcontentid, () => this.refreshCallBack())
      .then(_ => {
        // return this.svc.callApiGet(this.mcontentid, "http://mana-facing-dev.azurewebsites.net/BizAccount/637374890335148620/basic");
        return this.svc.getApiData(this.mcontentid);
      })
  }

  refreshCallBack() {
    this.hasLoaded = null;
    let load$ = this.loadData$();
    this.data$ = load$;
    load$.then((it: any) => {
      this.title = it.name != null ? it.name : this.title;
      this.hasLoaded = it ? "y" : "n";
    });
  }

  onSelectQr(endpointId: string) {
    this.svc.visitEndpoint(this.mcontentid, "https://s.manal.ink/np/nbizqrp-" + endpointId);
  }

  onSelectWithdraw(endpointId: string) {
    this.svc.visitEndpoint(this.mcontentid, "https://s.manal.ink/np/nbizwit-" + endpointId);
  }

  onSelectImage(endpointId: string) {
    this.svc.visitEndpoint(this.mcontentid, "https://s.manal.ink/np/nbizimg-" + endpointId);
  }

  public ParseToTwoDecimal(value: number) { return this.parse.ParseToTwoDecimal(value); }
}
