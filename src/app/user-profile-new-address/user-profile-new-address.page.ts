import { Component, OnInit } from '@angular/core';
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


  constructor(private fb: FormBuilder, private svc: IonManaLib) { 
    this.fg = this.fb.group({
      'title': [null, Validators.required],
      'streetAddress': [null, Validators.required],
      'district': [null, Validators.required],
      'city': [null, Validators.required],
      'province': [null, Validators.required],
      'postalCode': [null, Validators.required],
      'telephoneNumber': null,
      'mobileNumber': null,
      'fullAddress': null,
        // TODO : Binding หมายเหตุ
    });

    this.fg.valueChanges.subscribe(_ => {
      this.svc.validForm(this.fg.valid)
    });
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.svc.initPageApi(this.mcontentid);
    this.svc.validForm(this.fg.valid);
  }

  onSave() {
    if (this.fg.valid) {
      this.svc.submitFormData(this.mcontentid, this.fg.value);
    }
  }

}
