import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { IonManaLib } from 'ion-m-lib';

@Component({
  selector: 'app-merchant-create',
  templateUrl: './merchant-create.page.html',
  styleUrls: ['./merchant-create.page.scss'],
})
export class MerchantCreatePage implements OnInit {

  public fg: FormGroup;
  private mcontentid = "merchant-create";

  constructor(private fb: FormBuilder, private svc: IonManaLib) {
  this.fg = this.fb.group({
    'merchantName': [null, [Validators.required, this.nullOrWhiteSpaceValidator()]],
  });
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.svc.initPageApi(this.mcontentid);
  }

  nullOrWhiteSpaceValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      var isNullOrWhiteSpace = control.value === null || control.value.match(/^ *$/) !== null;
      return isNullOrWhiteSpace ? { 'merchantName': { value: control.value } } : null;
    };
  }

  onSave() {
    this.svc.submitFormData(this.mcontentid, this.fg.value, false);
  }
}
