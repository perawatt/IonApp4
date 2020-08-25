import { Component, OnInit } from '@angular/core';
import { IonManaLib } from 'ion-m-lib';
import { Router } from '@angular/router';
import { ParseDataProvider } from 'src/providers/parse-data';

@Component({
  selector: 'app-merchant-home',
  templateUrl: './merchant-home.page.html',
  styleUrls: ['./merchant-home.page.scss'],
})
export class MerchantHomePage implements OnInit {

  // public slideOpts = {
  //   slidesPerView: window.screen.width/100,
  //   spaceBetween: 12,
  //   speed: 400
  // };
  // private merchantId: string;
  // constructor(private router: Router, private svc: IonManaLib, private parse: ParseDataProvider) { }
  public title = "ร้านของคุณ";
  public hasLoaded: string;
  private mcontentid = "merchant-home";
  public data$ = Promise.resolve<{}>({});
  constructor(private svc: IonManaLib) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    //TODO Implement onTabToolbarItem => เปลี่ยนกลับไปใช้แบบ basic
    // this.svc.addToolbarAction((action) => this.onTabToolbarItem(action));
    this.refreshCallBack();
  }

  private loadData$() {
    return this.svc.initPageApiWithCallBack(this.mcontentid, () => this.refreshCallBack())
      .then(_ => {
        // return this.svc.callApiGet(this.mcontentid, "http://mana-facing-dev.azurewebsites.net/BizAccount/637334894267091896/advance")
        return this.svc.getApiData(this.mcontentid);
      })
  }

  refreshCallBack() {
    this.hasLoaded = null;
    let load$ = this.loadData$();
    this.data$ = load$;
    load$.then((it: any) => {
      console.log(it)
      this.hasLoaded = it ? "y" : "n";
      this.title = it.name != null ? it.name : this.title;
    });
  }

  onSelectEditProfile(endpointId: string) {
    this.svc.visitEndpoint(this.mcontentid, "https://s.manal.ink/np/nbizpfl-" + endpointId);
  }
  onSelectTransaction(endpointId: string) {
    this.svc.visitEndpoint(this.mcontentid, "https://s.manal.ink/np/nbiztxl-list$" + endpointId);
  }
  onSelectReceiveMoneyQR(endpointId: string) {
    this.svc.visitEndpoint(this.mcontentid, "https://s.manal.ink/np/nbizqrp-" + endpointId);
  }
  onSelectDeposit(endpointId: string) {
    this.svc.visitEndpoint(this.mcontentid, "https://s.manal.ink/np/nbiztop-" + endpointId);
  }
  onSelectWithDraw(endpointId: string) {
    this.svc.visitEndpoint(this.mcontentid, "https://s.manal.ink/np/nbizwit-" + endpointId);
  }
  onSelectEmployee(endpointId: string) {
    this.svc.visitEndpoint(this.mcontentid, "https://s.manal.ink/np/nbizemp-list$" + endpointId);
  }
  onSelectBudget(endpointId: string) {
    this.svc.visitEndpoint(this.mcontentid, "https://s.manal.ink/np/nbizbgt-list$" + endpointId);
  }


  //   ionViewDidEnter() {
  //     this.refreshCallBack();
  //   }

  //   private loadData$() {
  //     return this.svc.initPageApiWithCallBack(this.mcontentid, () => this.refreshCallBack())
  //       .then(_ => {
  //         return this.svc.getApiData(this.mcontentid);
  //       })
  //   }

  //   private refreshCallBack()
  //   {
  //     this.hasLoaded = null;
  //     let load$ = this.loadData$();
  //     this.data$ = load$;
  //     load$.then(it => {
  //       this.title = it.merchantAccount.name;
  //       this.merchantId = it.merchantAccount._id
  //       this.svc.initPageApi(this.mcontentid);
  //       this.hasLoaded = it ? "y" : "n";
  //     });
  //   }

  //   public onSelectReceiveMoneyQR() {
  //     this.router.navigate(["/merchant-qr-receive-money"]);
  //   }

  //   public onSelectAddThirdParty() {
  //     this.svc.visitEndpoint(this.mcontentid, "https://s.manal.ink/msg/underconstruction");
  //   }

  //   public onSelectProfile() {
  //     this.router.navigate(["/merchant-profile"]);
  //   }

  //   public onSelectTransaction() {
  //     this.router.navigate(["/merchant-transaction"]);
  //   }

  //   public onSelectWithDraw() {
  //     let id = "nbizwdw-" + this.merchantId;
  //     this.svc.visitEndpoint(this.mcontentid, "https://s.manal.ink/bizcenter/withdraw/" + id);
  //   }

  //   public onSelectTopup() {
  //     let id = "nbizdpt-" + this.merchantId;
  //     this.svc.visitEndpoint(this.mcontentid, "https://s.manal.ink/bizcenter/deposit/" + id);
  //   }

  //   public onSelectOwners() {
  //     this.router.navigate(["/merchant-co-owners"]);
  //   }

  //   public onSelectSetting() {
  //     this.svc.visitEndpoint(this.mcontentid, "https://s.manal.ink/msg/underconstruction");
  //   }

  //   public ParseToTwoDecimal(value: number) { return this.parse.ParseToTwoDecimal(value); }
}


