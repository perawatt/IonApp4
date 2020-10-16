import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ParseDataProvider } from 'src/providers/parse-data';
import { IonManaLib, confirmMessage } from 'ion-m-lib';

@Component({
  selector: 'app-merchant-topup',
  templateUrl: './merchant-topup.page.html',
  styleUrls: ['./merchant-topup.page.scss'],
})
export class MerchantTopupPage implements OnInit {

  public hasLoaded: string;
  public data$ = Promise.resolve<{}>({});
  public fg: FormGroup;
  private mcontentid: string = "merchant-topup";

  constructor(private svc: IonManaLib, private parse: ParseDataProvider, private fb: FormBuilder) {
  this.fg = this.fb.group({
    'amount': [null, [Validators.required, Validators.min(1), Validators.pattern("^[0-9]+\.?([0-9]{1,2})?$")]],
  });

    this.fg.valueChanges.subscribe(_ => {
      this.svc.validForm(this.fg.valid)
    });
  }

  ngOnInit() {
  }
  
  ionViewDidEnter() {
    this.svc.initPageApi(this.mcontentid);
    this.svc.validForm(this.fg.valid);
  }

  onSave() {
    if (this.fg.valid) {
      var topupAmount = this.ParseToTwoDecimal(this.fg.get('amount').value);
      let message = new confirmMessage("",
        "<span style=\"color: Black; \">คุณต้องการเติมเงินเข้าร้าน</span>\r\n\r\n[status]\r\n\r\n![operation_icon](assets/imgs/menutopup.png)\r\n\r\n<span style=\"color: Black; \">ธุรกิจของคุณ</span>\r\n\r\n<span style=\"color: Black; \">จำนวน</span><span style=\"color: Red; font-weight: bold\"> ฿" + topupAmount + "</span>\r\n\r\n"
      );
      this.svc.confirmForm(message).then(resolve => {
        if (resolve.isConfirm) {
          this.parse.ConvertFormGropuValueToTypeNumber(this.fg, ['amount']);
          this.svc.submitFormData(this.mcontentid, this.fg.value, true);
        }
      });
    }
  }

  public ParseToTwoDecimal(value: number) { return this.parse.ParseToTwoDecimal(value); }

  public AmountChanged(event) {
    this.fg.get('amount').setValue(this.parse.InputToDecimal(event.target.value))
  }
}
