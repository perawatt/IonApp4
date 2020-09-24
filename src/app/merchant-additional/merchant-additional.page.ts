import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { IonManaLib } from 'ion-m-lib';

@Component({
  selector: 'app-merchant-additional',
  templateUrl: './merchant-additional.page.html',
  styleUrls: ['./merchant-additional.page.scss'],
})
export class MerchantAdditionalPage implements OnInit {

  public file: any;
  public hasLoaded: string;
  public fg: FormGroup;
  public formData$: Promise<{}> = new Promise<{}>(_ => { });
  private mcontentid = "merchant-additional";

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
