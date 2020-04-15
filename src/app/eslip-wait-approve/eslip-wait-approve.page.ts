import { Component, OnInit } from '@angular/core';
import { IonManaLib } from 'ion-m-lib';

@Component({
  selector: 'app-eslip-wait-approve',
  templateUrl: './eslip-wait-approve.page.html',
  styleUrls: ['./eslip-wait-approve.page.scss'],
})
export class EslipWaitApprovePage implements OnInit {

  public hasLoaded: string;
  public data$ = Promise.resolve<{}>({});
  public title = "e-Slip";
  public isShowQR = false;
  public ToggleShowQRButtonText = "แสดงคิวอาร์โค้ด";
  private mcontentid = "eslip-wait-approve";

  constructor(private svc: IonManaLib) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.hasLoaded = null;
    let load$ = this.loadData$();
    this.data$ = load$;
    load$.then(it => {
      this.title = it.eslipStub.name;
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

  public ToggleShowQR() {
    this.isShowQR = !this.isShowQR;
    this.ToggleShowQRButtonText = this.isShowQR ? "ซ่อนคิวอาร์โค้ด" : "แสดงคิวอาร์โค้ด";
  }
}
