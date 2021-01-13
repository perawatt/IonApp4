import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IonManaLib } from 'ion-m-lib';

@Component({
  selector: 'app-merchant-address',
  templateUrl: './merchant-address.page.html',
  styleUrls: ['./merchant-address.page.scss'],
})
export class MerchantAddressPage implements OnInit {

  public hasLoaded: string;
  public fg: FormGroup;
  public formData$: Promise<{}> = new Promise<{}>(_ => { });
  private mcontentid = "merchant-address";

  constructor(private fb: FormBuilder, private svc: IonManaLib) {
    this.fg = this.fb.group({
      'title': [null, Validators.required],
      'streetAddress': [null, Validators.required],
      'district': [null, Validators.required],
      'city': [null, Validators.required],
      'province': [null, Validators.required],
      'postalCode': [null, Validators.required],
      'phoneNumber': [null, Validators.required],
      'remark': null,
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
    this.formData$ = load$;
    load$.then(it => {
      this.svc.validForm(this.fg.valid);
      let location = it.address.location;
      this.svc.setGpsSection(location.title, location.realm, location.subDistrict, location.district, location.province, location.postalCode, location.accuracy, location.geolocation.latitude, location.geolocation.longitude, location.phoneNumber, location.remark);
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
      this.svc.submitFormData(this.mcontentid, this.fg.value);
    }
  }
}
