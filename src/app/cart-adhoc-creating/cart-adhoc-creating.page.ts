import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonManaLib } from 'ion-m-lib';
import { ParseDataProvider } from 'src/providers/parse-data';

@Component({
  selector: 'app-cart-adhoc-creating',
  templateUrl: './cart-adhoc-creating.page.html',
  styleUrls: ['./cart-adhoc-creating.page.scss'],
})
export class CartAdhocCreatingPage implements OnInit {

  private attachCoupons = [];
  public hasLoaded: string;
  public data$ = Promise.resolve<{}>({});
  public fg: FormGroup;
  private mcontentid: string = "cart-adhoc-creating";
  
  constructor(private fb: FormBuilder, private svc: IonManaLib, private parse: ParseDataProvider) {
  this.fg = this.fb.group({
    'amountUnit': [null, [Validators.required, Validators.min(1), Validators.pattern("^[0-9]+\.?([0-9]{1,2})?$")]],
    'currency': null,
    'couponIds': null
  });

    this.fg.valueChanges.subscribe(_ => {
      this.svc.validForm(this.fg.valid)
    });
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.hasLoaded = null;
    this.svc.validForm(this.fg.valid);
    let load$ = this.loadData$();
    this.data$ = load$;
    load$.then(it => {
      this.svc.initPageApi(this.mcontentid);
      // it.aavaliableConpon.forEach(coupon => {
      //   this.attachCoupons.push(coupon);
      //   let couponId = [];
      //   this.attachCoupons.forEach(it => { couponId.push(it.id); })
      //   this.fg.get("couponIds").setValue(couponId);
      // });
      this.fg.get("currency").setValue(it.currency);
      this.hasLoaded = (it) ? "y" : "n";
    });
  }

  private loadData$() {
    return this.svc.initPageApi(this.mcontentid)
      .then(_ => {
        return this.svc.getApiData(this.mcontentid);
      })
  }

  onSave() {
    console.log("Submit cart-adhoc-creating");
    
    if (this.fg.valid) {
      console.log("valid cart-adhoc-creating");
      this.parse.ConvertFormGropuValueToTypeNumber(this.fg, ['amountUnit']);
      this.svc.submitFormData(this.mcontentid, this.fg.value, true);      
    }
  }

  public AmountChanged(event) {
    this.fg.get('amountUnit').setValue(this.parse.InputToDecimal(event.target.value))
  }
}
