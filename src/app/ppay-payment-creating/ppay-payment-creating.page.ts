import { Component, OnInit } from '@angular/core';
import { IonManaLib } from 'ion-m-lib';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ParseDataProvider } from 'src/providers/parse-data';

@Component({
  selector: 'app-ppay-payment-creating',
  templateUrl: './ppay-payment-creating.page.html',
  styleUrls: ['./ppay-payment-creating.page.scss'],
})
export class PpayPaymentCreatingPage implements OnInit {

  public hasLoaded: string;
  public fg: FormGroup;
  public data$ = Promise.resolve<{}>({});
  private mcontentid: string = "ppay-payment-creating";
  constructor(private svc: IonManaLib, private fb: FormBuilder, private parse: ParseDataProvider) {
    this.fg = this.fb.group({
      'amount': [null, [Validators.required, Validators.min(1), Validators.pattern("^[0-9]+\.?([0-9]{1,2})?$")]],
      'currency': null,
      'code': null
    });

    this.fg.valueChanges.subscribe(_ => {
      this.svc.validForm(this.fg.valid)
    });
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.hasLoaded = null;
    this.loadData$();
    this.svc.setStateChangedHandler((param) => this.OnStateChanged(param));
    //this.data$ = load$;
    // load$.then(it => {
    //   this.svc.initPageApi(this.mcontentid);
    //   this.hasLoaded = it ? "y" : "n";
    //   this.fg.get('amount').setValue(it.amount);
    // });
  }

  OnStateChanged(state) {
    let load$ = this.svc.callApiGet(this.mcontentid, state);
    this.data$ = load$;
    load$.then(it => {
      this.fg.get('amount').setValue(it.amount);
      this.fg.get('code').setValue(it.code);
      this.fg.get("currency").setValue("THB");
      this.hasLoaded = it ? "y" : "n";
    })
  }

  private loadData$() {
    return this.svc.initPageApi(this.mcontentid)
      .then(_ => {
        return this.svc.getApiData(this.mcontentid);
      })
  }

  onSave() {
    if (this.fg.valid) {
      this.parse.ConvertFormGropuValueToTypeNumber(this.fg, ['amount']);
      this.svc.submitFormData(this.mcontentid, this.fg.value, true);
    }
  }

  public ParseToTwoDecimal(value: number) { return this.parse.ParseToTwoDecimal(value); }

  public AmountChanged(event) {
    this.fg.get('amount').setValue(this.parse.InputToDecimal(event.target.value))
  }
}
