import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonManaLib } from 'ion-m-lib';
import { ParseDataProvider } from 'src/providers/parse-data';

@Component({
  selector: 'app-wallet-topup-qr-create',
  templateUrl: './wallet-topup-qr-create.page.html',
  styleUrls: ['./wallet-topup-qr-create.page.scss'],
})
export class WalletTopupQrCreatePage implements OnInit {

  public hasLoaded: string;
  public fg: FormGroup;
  public data$ = Promise.resolve<{}>({});
  private mcontentid = "wallet-topup-qr-create";

  constructor(private svc: IonManaLib, private fb: FormBuilder, private parse: ParseDataProvider) {
    this.fg = this.fb.group({
      'walletId': [null, Validators.required],
      'amountUnit': [0, [Validators.required, Validators.min(1), Validators.pattern("^[0-9]+\.?([0-9]{1,2})?$")]],
      'currency': ["THB", Validators.required]
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
      this.fg.get("walletId").setValue(it.walletId);
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

  public AmountChanged(event) {
    this.fg.get('amountUnit').setValue(this.parse.InputToDecimal(event.target.value))
  }
}
