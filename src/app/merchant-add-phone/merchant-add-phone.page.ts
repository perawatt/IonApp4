import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IonManaLib } from 'ion-m-lib';

@Component({
  selector: 'app-merchant-add-phone',
  templateUrl: './merchant-add-phone.page.html',
  styleUrls: ['./merchant-add-phone.page.scss'],
})
export class MerchantAddPhonePage implements OnInit {

  public hasLoaded: string;
  public fg: FormGroup;
  private mcontentid = "merchant-add-phone";
  constructor(private fb: FormBuilder, private svc: IonManaLib) {
    this.fg = this.fb.group({
      'title': [null, Validators.required],
      'number': [null, Validators.required],
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
