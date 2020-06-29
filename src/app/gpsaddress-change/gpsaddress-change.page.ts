import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IonManaLib } from 'ion-m-lib';

@Component({
  selector: 'app-gpsaddress-change',
  templateUrl: './gpsaddress-change.page.html',
  styleUrls: ['./gpsaddress-change.page.scss'],
})
export class GpsaddressChangePage implements OnInit {

  public fg: FormGroup;
  private mcontentid = "gpsaddress-change";

  constructor(private fb: FormBuilder, private svc: IonManaLib) { 
    this.fg = this.fb.group({
      'phoneNo': null,
      'note': null,
        // TODO : Binding ให้ถูกต้อง
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
