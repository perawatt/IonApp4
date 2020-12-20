import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonManaLib } from 'ion-m-lib';

@Component({
  selector: 'app-user-profile-edit-address',
  templateUrl: './user-profile-edit-address.page.html',
  styleUrls: ['./user-profile-edit-address.page.scss'],
})
export class UserProfileEditAddressPage implements OnInit {

  public hasLoaded: string;
  public fg: FormGroup;
  public formData$: Promise<{}> = new Promise<{}>(_ => { });
  private mcontentid = "user-profile-edit-address";

  constructor(private fb: FormBuilder, private zone: NgZone, private svc: IonManaLib) {
    (<any>window).fillAddress = (params: any) => { this.fillAddress(params) };
    this.fg = this.fb.group({
      'address': this.fb.group({
        '_id': null,
        'title': [null, Validators.required],
        'streetAddress': [null, Validators.required],
        'district': [null, Validators.required],
        'city': [null, Validators.required],
        'province': [null, Validators.required],
        'postalCode': [null, Validators.required],
        'phoneNumber': [null, Validators.required],
        'remark': null,
        'fullAddress': null
      }),
      'isBillingAddress': null,
      'isShippingAddress': null
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


  fillAddress(params: any) {
    this.zone.run(() => {
      this.fg.get('address').get('district').setValue(params.SubDistrict);
      this.fg.get('address').get('city').setValue(params.District);
      this.fg.get('address').get('province').setValue(params.Province);
      this.fg.get('address').get('postalCode').setValue(params.PostalCode);
    })
  }

  onSave() {
    if (this.fg.valid) {
      this.svc.submitFormData(this.mcontentid, this.fg.value);
    }
  }

}
