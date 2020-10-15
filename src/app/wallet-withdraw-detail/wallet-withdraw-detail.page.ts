import { Component, OnInit } from '@angular/core';
import { IonManaLib } from 'ion-m-lib';
import { FormBuilder, FormGroup, Validators, ValidatorFn, ValidationErrors } from '@angular/forms';
import { ParseDataProvider } from 'src/providers/parse-data';

@Component({
  selector: 'app-wallet-withdraw-detail',
  templateUrl: './wallet-withdraw-detail.page.html',
  styleUrls: ['./wallet-withdraw-detail.page.scss'],
})
export class WalletWithdrawDetailPage implements OnInit {

  public hasLoaded: string;
  public fg: FormGroup;
  public data$ = Promise.resolve<{}>({});
  private mcontentid = "wallet-withdraw-detail";
  constructor(private svc: IonManaLib, private fb: FormBuilder, private parse: ParseDataProvider) {
    this.fg = this.fb.group({
      'promptpayType': ["mobile", Validators.required],
      'promptpayId': null,
      'amountUnit': [null, [Validators.required, Validators.min(1), Validators.pattern("^[0-9]+\.?([0-9]{1,2})?$")]],
    }, { validator: this.FormValidator });

    this.fg.valueChanges.subscribe(_ => {
      this.svc.validForm(this.fg.valid)
    });
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.svc.initPageApi(this.mcontentid);
    this.hasLoaded = null;
    let load$ = this.loadData$();
    this.data$ = load$;
    load$.then(it => {
      this.hasLoaded = it ? "y" : "n";
    });
    this.svc.validForm(this.fg.valid);
  }

  private loadData$() {
    return this.svc.initPageApi(this.mcontentid)
      .then(_ => {
        return this.svc.getApiData(this.mcontentid);
      })
  }

  onSave() {
    if (this.fg.valid) {
      this.parse.ConvertFormGropuValueToTypeNumber(this.fg, ['amountUnit']);
      this.svc.submitFormData(this.mcontentid, this.fg.value, true);
    }
  }

  private FormValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {

    const promptpayType = control.get('promptpayType').value;
    const promptpayId = control.get('promptpayId').value;

    if (promptpayId) {
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


  public AmountChanged(event) {
    this.fg.get('amountUnit').setValue(this.parse.InputToDecimal(event.target.value))
  }
}
