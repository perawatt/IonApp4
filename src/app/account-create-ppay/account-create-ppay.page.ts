import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { IonManaLib } from 'ion-m-lib';
import { ParseDataProvider } from 'src/providers/parse-data';

@Component({
  selector: 'app-account-create-ppay',
  templateUrl: './account-create-ppay.page.html',
  styleUrls: ['./account-create-ppay.page.scss'],
})
export class AccountCreatePpayPage implements OnInit {

  public fg: FormGroup;
  private mcontentid = "account-create-ppay";

  constructor(private svc: IonManaLib, private fb: FormBuilder, private parse: ParseDataProvider) {
    this.fg = this.fb.group({
      'displayName': [null, Validators.required],
      'type': ["mobile", Validators.required],
      'promptPayNumber': [null, Validators.required],
    }, { validator: this.FormValidator });

    this.fg.valueChanges.subscribe(_ => {
      this.svc.validForm(this.fg.valid)
    });
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.svc.initPageApi(this.mcontentid);
  }

  onSave() {
    if (this.fg.valid) {
      this.svc.submitFormData(this.mcontentid, this.fg.value, true);
    }
  }

  private FormValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {

    const promptpayType = control.get('type').value;
    const promptPayNumber = control.get('promptPayNumber').value;

    if (promptPayNumber) {
      var validLength = 0;
      switch (promptpayType) {
        case "pid": validLength = 13; break;
        case "mobile": validLength = 10; break;
        default: return { 'message': "promptpayType can not be empty" };
      }

      if (promptPayNumber.toString().length == validLength) return null;
      else return { 'message': "promptPayNumber must have " + validLength + " length only" };
    }
  }
}
