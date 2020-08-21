import { Component, OnInit } from '@angular/core';
import { IonManaLib } from 'ion-m-lib';

@Component({
  selector: 'app-merchant-profile',
  templateUrl: './merchant-profile.page.html',
  styleUrls: ['./merchant-profile.page.scss'],
})
export class MerchantProfilePage implements OnInit {

  public hasLoaded: string;
  public data$ = Promise.resolve<{}>({});
  private mcontentid = "merchant-profile";
  constructor(private svc: IonManaLib) { }

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
        // return this.svc.callApiGet(this.mcontentid, "https://mana-facing-dev.azurewebsites.net/BizAccount/637334893975177162/profile")
        return this.svc.getApiData(this.mcontentid); 
      })
  }

  onSelectPhone(endpointId: string) {
    this.svc.visitEndpoint(this.mcontentid, "https://s.manal.ink/np/nbiztel-list$" + endpointId);
  }

  onSelectAddress(endpointId: string) {
    this.svc.visitEndpoint(this.mcontentid, "https://s.manal.ink/np/nbizads-" + endpointId);
  }

  onSelectSchedule(endpointId: string) {
    this.svc.visitEndpoint(this.mcontentid, "https://s.manal.ink/np/nbizsch-" + endpointId);
  }

  onSelectContract(endpointId: string) {
    this.svc.visitEndpoint(this.mcontentid, "https://s.manal.ink/np/nbizctt-list$" + endpointId);
  }

  onSelectPledge(endpointId: string) {
    this.svc.visitEndpoint(this.mcontentid, "https://s.manal.ink/np/nbizplg-list$" + endpointId);
  }
}
