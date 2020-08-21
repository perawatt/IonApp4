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
      'fullAddress': null,
      'remark': null,
    });

    this.fg.valueChanges.subscribe(_ => {
      this.svc.validForm(this.fg.valid)
    });
  }

  ngOnInit() {
  }

  onSave() {
    if (this.fg.valid) {
      this.svc.submitFormData(this.mcontentid, this.fg.value);
    }
  }
}
