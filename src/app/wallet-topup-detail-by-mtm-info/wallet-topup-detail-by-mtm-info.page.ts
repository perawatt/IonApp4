import { Component, OnInit } from '@angular/core';
import { IonManaLib } from 'ion-m-lib';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-wallet-topup-detail-by-mtm-info',
  templateUrl: './wallet-topup-detail-by-mtm-info.page.html',
  styleUrls: ['./wallet-topup-detail-by-mtm-info.page.scss'],
})
export class WalletTopupDetailByMtmInfoPage implements OnInit {

  public accountId = "6700699819";
  private mcontentid: string = "wallet-topup-detail-by-mtm-info";
  constructor(private svc: IonManaLib, public toastCtrl: ToastController) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.svc.initPageApi(this.mcontentid);
    this.svc.validForm(true);
  }

  public onNext() {
    this.svc.visitEndpoint(this.mcontentid, "https://s.manal.ink/fin/mtm/deposit/nmtmdpt-");
  }

  public async clipboard() {
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = this.accountId;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);

    let toast = await this.toastCtrl.create({
      message: 'คัดลอกสำเร็จ',
      duration: 2000,
      position: "bottom",
      color:"dark"
    });
    toast.present();
  }
}
