import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonManaLib, confirmMessage } from 'ion-m-lib';
import { ParseDataProvider } from 'src/providers/parse-data';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-wallet-topup-detail-by-mtm',
  templateUrl: './wallet-topup-detail-by-mtm.page.html',
  styleUrls: ['./wallet-topup-detail-by-mtm.page.scss'],
})
export class WalletTopupDetailByMtmPage implements OnInit {

  public hasImage: string;
  public imageResponse$;
  public fg: FormGroup;
  public accountId = "6700699819";
  private mcontentid: string = "wallet-topup-detail-by-mtm";
  constructor(private svc: IonManaLib, private fb: FormBuilder, private parse: ParseDataProvider, public toastCtrl: ToastController) {
    this.fg = this.fb.group({
      'amount': [null, [Validators.required, Validators.min(20), Validators.pattern("^[0-9]+\.?([0-9]{1,2})?$")]],
      'imageId': [null, Validators.required],
      'contactNumber': [null, Validators.required],
    });

    this.fg.valueChanges.subscribe(_ => {
      this.svc.validForm(this.fg.valid)
    });
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.hasImage = null;
    this.svc.initPageApi(this.mcontentid);
    this.svc.validForm(this.fg.valid);
  }

  insertBankTransferSlip() {
    this.fg.get("imageId").reset();
    let load$ = this.svc.selectImage(this.mcontentid);
    this.imageResponse$ = load$;
    load$.then(it => {
      this.hasImage = it ? "y" : "n";
      if (it) { this.fg.get("imageId").setValue(it._id); }
    });
  }

  onSave() {
    if (this.fg.valid) {
      var topupAmount = this.ParseToTwoDecimal(this.fg.get('amount').value);
      let message = new confirmMessage("",
        "<span style=\"color: Black; \">ต้องการเติมเงินเข้าบัญชี</span>\r\n\r\n[status]\r\n\r\n![operation_icon](assets/imgs/fndeposit.png)\r\n\r\n<span style=\"color: Black; \">จำนวน</span><span style=\"color: Red; font-weight: bold\"> ฿" + topupAmount + "</span>\r\n\r\n"
      );
      this.svc.confirmForm(message).then(resolve => {
        if (resolve.isConfirm) {
          this.svc.submitFormData(this.mcontentid, this.fg.value, true);
        }
      });
    }
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

  public ParseToTwoDecimal(value: number) { return this.parse.ParseToTwoDecimal(value); }

  public AmountChanged() {
    this.fg.get('amount').setValue(this.parse.ParseToTwoDecimalForInput(this.fg.get('amount').value));
  }
}
