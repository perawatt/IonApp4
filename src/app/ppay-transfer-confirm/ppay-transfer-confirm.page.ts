import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import { concat } from 'rxjs';
import { IonManaLib } from 'ion-m-lib';

@Component({
  selector: 'app-ppay-transfer-confirm',
  templateUrl: './ppay-transfer-confirm.page.html',
  styleUrls: ['./ppay-transfer-confirm.page.scss'],
})
export class PpayTransferConfirmPage implements OnInit {

  public hasLoaded: string;
  public data$ = Promise.resolve<{}>({});
  private mcontentid: string = "ppay-transfer-confirm";
  constructor(private svc: IonManaLib) { }

  ngOnInit() {
  }
  
  ionViewDidEnter() {
    this.hasLoaded = null;
    let load$ = this.loadData$();
    this.data$ = load$;
    load$.then(it => {
      this.svc.initPageApi(this.mcontentid);
      this.hasLoaded = it ? "y" : "n";
    });
  }

  private loadData$() {
    return this.svc.initPageApi(this.mcontentid)
      .then(_ => {
        return this.svc.getApiData(this.mcontentid);
      })
  }

  public DisplayRefId(value: string) {
    if (value) {
      let censor = "****";
      return censor.concat(value.slice(4));
    }
  }
}
