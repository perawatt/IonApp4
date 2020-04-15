import { Component, OnInit } from '@angular/core';
import { IonManaLib } from 'ion-m-lib';

@Component({
  selector: 'app-eslip-approved',
  templateUrl: './eslip-approved.page.html',
  styleUrls: ['./eslip-approved.page.scss'],
})
export class EslipApprovedPage implements OnInit {

  public hasLoaded: string;
  public data$ = Promise.resolve<{}>({});
  public title = "e-Slip";
  public isShowQR = false;
  public ToggleShowQRButtonText = "แสดงคิวอาร์โค้ด";
  private mcontentid = "eslip-approved";

  constructor(private svc: IonManaLib) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.hasLoaded = null;
    let load$ = this.loadData$();
    this.data$ = load$;
    load$.then(it => {
      this.title = it.eslipStub != null ? it.eslipStub.name : this.title;
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
