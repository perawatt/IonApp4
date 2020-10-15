import { Component, OnInit } from '@angular/core';
import { IonManaLib, confirmMessage } from 'ion-m-lib';
import { FormBuilder, FormGroup, Validators, ValidatorFn, ValidationErrors } from '@angular/forms';
import { ParseDataProvider } from 'src/providers/parse-data';

@Component({
  selector: 'app-wallet-withdraw-detail-by-mtm',
  templateUrl: './wallet-withdraw-detail-by-mtm.page.html',
  styleUrls: ['./wallet-withdraw-detail-by-mtm.page.scss'],
})
export class WalletWithdrawDetailByMtmPage implements OnInit {

  public hasLoaded: string;
  public fg: FormGroup;
  private mcontentid: string = "wallet-withdraw-detail-by-mtm";
  constructor(private svc: IonManaLib, private fb: FormBuilder, private parse: ParseDataProvider) {
    this.fg = this.fb.group({
      'amount': [null, [Validators.required, Validators.min(50), Validators.pattern("^[0-9]+\.?([0-9]{1,2})?$")]],
      'accountType': ["bankaccount", Validators.required],
      'accountId': null,
      'bankName': "กรุงเทพ",
      'accountName': [null, Validators.required],
      'contactNumber': [null, Validators.required],
    }, { validator: this.FormValidator });

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
      var withdrawAmount = this.ParseToTwoDecimal(this.fg.get('amount').value);
      let message = new confirmMessage("",
        "<span style=\"color: Black; \">ต้องการถอนเงินออกจากบัญชี</span>\r\n\r\n[status]\r\n\r\n![operation_icon](assets/imgs/fnwithdraw.png)\r\n\r\n<span style=\"color: Black; \">จำนวน</span><span style=\"color: Red; font-weight: bold\"> ฿" + withdrawAmount + "</span>\r\n\r\n"
      );
      this.svc.confirmForm(message).then(resolve => {
        if (resolve.isConfirm) {
          this.parse.ConvertFormGropuValueToTypeNumber(this.fg, ['amount']);
          this.svc.submitFormData(this.mcontentid, this.fg.value, true);
        }
      });
    }
  }

  private FormValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {

    const accountType = control.get('accountType').value;
    const accountId = control.get('accountId').value;

    if (accountId) {
      var validLength = 0;
      switch (accountType) {
        case "pid": validLength = 13; break;
        case "mobile": validLength = 10; break;
        case "bankaccount": validLength = 1; break;
        default: return { 'message': "promptpayType can not be empty" };
      }

      if (validLength == 1) {
        if (accountId.toString().length >= validLength) return null;
        else return { 'message': "accountId must have more than " + validLength };
      }
      else if (accountId.toString().length == validLength) return null;
      else return { 'message': "accountId must have " + validLength + " length only" };
    }
    else return { 'message': "accountId can not be empty" };
  }

  public ParseToTwoDecimal(value: number) { return this.parse.ParseToTwoDecimal(value); }

  public AmountChanged(event) {
    this.fg.get('amount').setValue(this.parse.InputToDecimal(event.target.value))
  }
}
