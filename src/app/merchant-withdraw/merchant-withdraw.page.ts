import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { IonManaLib, confirmMessage } from 'ion-m-lib';
import { ParseDataProvider } from 'src/providers/parse-data';

@Component({
  selector: 'app-merchant-withdraw',
  templateUrl: './merchant-withdraw.page.html',
  styleUrls: ['./merchant-withdraw.page.scss'],
})
export class MerchantWithdrawPage implements OnInit {

  public hasLoaded: string;
  public data$ = Promise.resolve<{}>({});
  public fg: FormGroup;
  private mcontentid: string = "merchant-withdraw";
  
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
  
  onSave() {
    if (this.fg.valid) {
      var topupAmount = this.ParseToTwoDecimal(this.fg.get('amount').value);
      let message = new confirmMessage("",
        "<span style=\"color: Black; \">คุณต้องการเติมเงินเข้าร้าน</span>\r\n\r\n[status]\r\n\r\n![operation_icon](assets/imgs/menutopup.png)\r\n\r\n<span style=\"color: Black; \">ธุรกิจของคุณ</span>\r\n\r\n<span style=\"color: Black; \">จำนวน</span><span style=\"color: Red; font-weight: bold\"> ฿" + topupAmount + "</span>\r\n\r\n"
      );
      this.svc.confirmForm(message).then(resolve => {
        if (resolve.isConfirm) {
          this.svc.submitFormData(this.mcontentid, this.fg.value, true);
        }
      });
    }
  }

  public ParseToTwoDecimal(value: number) { return this.parse.ParseToTwoDecimal(value); }

  public AmountChanged() {
    this.fg.get('amount').setValue(this.parse.ParseToTwoDecimal(this.fg.get('amount').value));
  }
}
