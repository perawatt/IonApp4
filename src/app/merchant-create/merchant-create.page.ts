import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { IonManaLib } from 'ion-m-lib';

@Component({
  selector: 'app-merchant-create',
  templateUrl: './merchant-create.page.html',
  styleUrls: ['./merchant-create.page.scss'],
})
export class MerchantCreatePage implements OnInit {

  public file: any;
  public fg: FormGroup;
  private mcontentid = "merchant-create";

  constructor(private fb: FormBuilder, private svc: IonManaLib) {
    this.fg = this.fb.group({
      'name': [null, [Validators.required, this.nullOrWhiteSpaceValidator()]],
      'logo': [null],
      'phone': [null],
      //TODO Use Model?
      'address': this.fb.group({
        '_id': null,
        'title': [null],
        'streetAddress': [null],
        'district': [null],
        'city': [null],
        'province': [null],
        'postalCode': [null],
        'phoneNumber': [null],
        'remark': null,
        'fullAddress': null
      }),
    });

    this.fg.valueChanges.subscribe(_ => {
      this.svc.validForm(this.fg.valid)
    });
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.svc.validForm(this.fg.valid);
    this.svc.initPageApi(this.mcontentid);
  }

  nullOrWhiteSpaceValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      var isNullOrWhiteSpace = control.value === null || control.value.match(/^ *$/) !== null;
      return isNullOrWhiteSpace ? { 'name': { value: control.value } } : null;
    };
  }

  onSave() {
    this.svc.submitFormData(this.mcontentid, this.fg.value, false);
  }

  selectPhoto(event) {
    this.file = event.target.firstChild.files;
    var preview = document.querySelectorAll('img');
    var reader = new FileReader();
    reader.onload = function (e: any) {
      preview[preview.length - 1].src = e.target.result;
    };
    reader.readAsDataURL(this.file[0]);
  }
}
