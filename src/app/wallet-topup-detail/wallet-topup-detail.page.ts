import { Component, OnInit } from '@angular/core';
import { IonManaLib } from 'ion-m-lib';
import { FormBuilder, FormGroup, Validators, ValidatorFn, ValidationErrors } from '@angular/forms';
import { ParseDataProvider } from 'src/providers/parse-data';

@Component({
  selector: 'app-wallet-topup-detail',
  templateUrl: './wallet-topup-detail.page.html',
  styleUrls: ['./wallet-topup-detail.page.scss'],
})
export class WalletTopupDetailPage implements OnInit {

  public hasLoaded: string;
  public fg: FormGroup;
  private mcontentid = "wallet-topup-detail";
  constructor(private svc: IonManaLib, private fb: FormBuilder, private parse: ParseDataProvider) {
    this.fg = this.fb.group({
      'promptpayType': ["pid", Validators.required],
      'promptpayId': null,
      'amount': [null, [Validators.required, Validators.min(1), Validators.pattern("^[0-9]+\.?([0-9]{1,2})?$")]],
    }, { validator: this.FormValidator });

    this.fg.valueChanges.subscribe(_ => {
      this.svc.validForm(this.fg.valid)
    });
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.svc.initPageApi(this.mcontentid);
    // TODO: Get default wallet from server
    this.svc.validForm(this.fg.valid);
  }

  onSave() {
    if (this.fg.valid) {
      this.svc.submitFormData(this.mcontentid, this.fg.value, true);
    }
  }

  private FormValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {

    const promptpayType = control.get('promptpayType').value;
    const promptpayId = control.get('promptpayId').value;

    if (promptpayType == "qr") return null;
    else if (promptpayId) {
      var validLength = 0;
      switch (promptpayType) {
        case "pid": validLength = 13; break;
        case "mobile": validLength = 10; break;
        default: return { 'message': "promptpayType can not be empty" };
      }

      if (promptpayId.toString().length == validLength) return null;
      else return { 'message': "PromptPayId must have " + validLength + " length only" };
    }
    else return { 'message': "PromptPayId can not be empty" };
  };

  public AmountChanged() {
    this.fg.get('amount').setValue(this.parse.ParseToTwoDecimal(this.fg.get('amount').value));
  }
}
