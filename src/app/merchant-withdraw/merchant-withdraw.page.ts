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
  public selectedWallet: number;
  public walletDisplayName: string;
  public walletName: string;
  private mcontentid: string = "merchant-withdraw";

  constructor(private svc: IonManaLib, private parse: ParseDataProvider, private fb: FormBuilder) {
    this.fg = this.fb.group({
      'amountUnit': [null, [Validators.required, Validators.min(1), Validators.pattern("^[0-9]+\.?([0-9]{1,2})?$")]],
      'selectedWallet': [null, Validators.required],
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
      // TODO : Implement change wallet
      this.fg.get("selectedWallet").setValue(it.wallets[0].walletName); 
      this.walletDisplayName = it.wallets[0].ownerDisplayName;
      this.walletName = it.wallets[0].walletName;
      this.hasLoaded = it ? "y" : "n";
    });
  }

  private loadData$() {
    return this.svc.initPageApi(this.mcontentid)
      .then(_ => {
        return this.svc.getApiData(this.mcontentid);
      })
  }

  // onSave() {
  //   if (this.fg.valid) {
  //     var topupAmount = this.ParseToTwoDecimal(this.fg.get('amount').value);
  //     let message = new confirmMessage("",
  //       "<span style=\"color: Black; \">คุณต้องการเติมเงินเข้าร้าน</span>\r\n\r\n[status]\r\n\r\n![operation_icon](assets/imgs/menutopup.png)\r\n\r\n<span style=\"color: Black; \">ธุรกิจของคุณ</span>\r\n\r\n<span style=\"color: Black; \">จำนวน</span><span style=\"color: Red; font-weight: bold\"> ฿" + topupAmount + "</span>\r\n\r\n"
  //     );
  //     this.svc.confirmForm(message).then(resolve => {
  //       if (resolve.isConfirm) {
  //         this.svc.submitFormData(this.mcontentid, this.fg.value, true);
  //       }
  //     });
  //   }
  // }

  onSave() {
    if (this.fg.valid) {
      this.parse.ConvertFormGropuValueToTypeNumber(this.fg, ['amountUnit']);
      this.svc.submitFormData(this.mcontentid, this.fg.value, true);
    }
  }

  public ParseToTwoDecimal(value: number) { return this.parse.ParseToTwoDecimal(value); }

  public AmountChanged(event) {
    this.fg.get('amountUnit').setValue(this.parse.InputToDecimal(event.target.value))
  }
}
