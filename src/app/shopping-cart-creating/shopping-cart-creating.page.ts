import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { IonManaLib } from 'ion-m-lib';
import { ParseDataProvider } from 'src/providers/parse-data';

@Component({
  selector: 'app-shopping-cart-creating',
  templateUrl: './shopping-cart-creating.page.html',
  styleUrls: ['./shopping-cart-creating.page.scss'],
})
export class ShoppingCartCreatingPage implements OnInit {

  private attachCoupons = [];
  public hasLoaded: string;
  public data$ = Promise.resolve<{}>({});
  public fg: FormGroup;
  private mcontentid: string = "shopping-cart-creating";
  
  constructor(private fb: FormBuilder, private svc: IonManaLib, private parse: ParseDataProvider) {
  this.fg = this.fb.group({
    'amount': [null, [Validators.required, Validators.min(1), Validators.pattern("^[0-9]+\.?([0-9]{1,2})?$")]],
    'conponId': null,
    'points': null
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
      it.aavaliableConpon.forEach(coupon => {
        this.attachCoupons.push(coupon);
        let couponId = [];
        this.attachCoupons.forEach(it => { couponId.push(it.id); })
        this.fg.get("conponId").setValue(couponId);
      });
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
    if (this.fg.valid) {
      this.svc.submitFormData(this.mcontentid, this.fg.value, true);
    }
  }

  public AmountChanged() {
    this.fg.get('amount').setValue(this.parse.ParseToTwoDecimalForInput(this.fg.get('amount').value.toString()));
  }
}
