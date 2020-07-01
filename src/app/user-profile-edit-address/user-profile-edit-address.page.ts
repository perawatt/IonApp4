import { Component, OnInit } from '@angular/core';
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

  constructor(private fb: FormBuilder, private svc: IonManaLib) {
    this.fg = this.fb.group({
      'address': this.fb.group({
        'title': [null, Validators.required],
        'streetAddress': [null, Validators.required],
        'district': [null, Validators.required],
        'city': [null, Validators.required],
        'province': [null, Validators.required],
        'postalCode': [null, Validators.required],
        'phoneNumber': [null, Validators.required],
        'fullAddress': null,
        'remark':null,
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
