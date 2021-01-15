import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    });

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
}
