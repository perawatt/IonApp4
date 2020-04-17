import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IonManaLib } from 'ion-m-lib';

@Component({
  selector: 'app-reminder-form',
  templateUrl: './reminder-form.page.html',
  styleUrls: ['./reminder-form.page.scss'],
})
export class ReminderFormPage implements OnInit {

  public fg: FormGroup;
  private mcontentid = "reminder-form";

  constructor(private fb: FormBuilder, private svc: IonManaLib) { 
    this.fg = this.fb.group({
      'mobileNumber': [null, Validators.required]
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
      this.svc.submitFormData(this.mcontentid, this.fg.value, false);
    }
  }
}
