import { Component, OnInit } from '@angular/core';
import { IonManaLib } from 'ion-m-lib';

@Component({
  selector: 'app-membership-agreement',
  templateUrl: './membership-agreement.page.html',
  styleUrls: ['./membership-agreement.page.scss'],
})
export class MembershipAgreementPage implements OnInit {

  private hasLoaded: string;
  private mcontentid: string = "membership-agreement";
  public data$ = Promise.resolve<{}>({});
  constructor(private svc: IonManaLib) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.hasLoaded = null;
    let load$ = this.loadData$();
    this.data$ = load$;
    load$.then(it => {
      this.hasLoaded = it ? "y" : "n";
      console.log(JSON.stringify(it));      
    });
  }

  private loadData$() {
    return this.svc.initPageApi(this.mcontentid)
      .then(_ => {
        return this.svc.getApiData(this.mcontentid);
      })
  }

}
