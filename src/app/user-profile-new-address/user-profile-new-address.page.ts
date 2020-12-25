import { Component, NgZone, OnInit } from '@angular/core';
import { IonManaLib } from 'ion-m-lib';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-profile-new-address',
  templateUrl: './user-profile-new-address.page.html',
  styleUrls: ['./user-profile-new-address.page.scss'],
})
export class UserProfileNewAddressPage implements OnInit {

  public hasLoaded: string;
  public fg: FormGroup;
  private mcontentid = "user-profile-new-address";
  public formData$: Promise<{}> = new Promise<{}>(_ => { });
  constructor(private fb: FormBuilder, private zone: NgZone, private svc: IonManaLib) { 
    (<any>window).fillAddress = (params: any) => { this.fillAddress(params) };
    this.fg = this.fb.group({
      'title': [null, Validators.required],
      'streetAddress': [null, Validators.required],
      'district': [null, Validators.required],
      'city': [null, Validators.required],
      'province': [null, Validators.required],
      'postalCode': [null, Validators.required],
      'phoneNumber': [null, Validators.required],
      'fullAddress': null,
      'remark':null,
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
      this.fg.get('district').setValue(params.SubDistrict);
      this.fg.get('city').setValue(params.District);
      this.fg.get('province').setValue(params.Province);
      this.fg.get('postalCode').setValue(params.PostalCode);
    })
  }

  onSave() {
    if (this.fg.valid) {
      this.svc.submitFormData(this.mcontentid, this.fg.value);
    }
  }

}
