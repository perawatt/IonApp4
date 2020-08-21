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
  // public formData$: Promise<{}> = new Promise<{}>(_ => { });

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

  // คิดว่าไม่ได้ใช้ เพราะไม่ได้ดึงข้อมูลอะไรมา เป็นการสร้างร้านใหม่
  // ionViewDidEnter() {
  //   this.hasLoaded = null;
  //   let load$ = this.loadData$();
  //   this.formData$ = load$;
  //   load$.then(it => {
  //     this.svc.validForm(this.fg.valid);
  //     this.hasLoaded = it ? "y" : "n";
  //   });
  // }

  // คิดว่าไม่ได้ใช้ เพราะไม่ได้ดึงข้อมูลอะไรมา เป็นการสร้างร้านใหม่
  // private loadData$() {
  //   return this.svc.initPageApi(this.mcontentid)
  //     .then(_ => {
  //       return this.svc.getApiData(this.mcontentid);
  //     })
  // }

  onSave() {
    if (this.fg.valid) {
      this.svc.submitFormData(this.mcontentid, this.fg.value);
    }
  }
}
