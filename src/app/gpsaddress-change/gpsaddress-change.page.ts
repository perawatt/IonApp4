import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonManaLib } from 'ion-m-lib';

@Component({
  selector: 'app-gpsaddress-change',
  templateUrl: './gpsaddress-change.page.html',
  styleUrls: ['./gpsaddress-change.page.scss'],
})
export class GpsaddressChangePage implements OnInit {

  public hasLoaded: string;
  public formData$: Promise<{}> = new Promise<{}>(_ => { });
  public fg: FormGroup;
  private mcontentid = "gpsaddress-change";
  constructor(private fb: FormBuilder, private svc: IonManaLib) {
    this.fg = this.fb.group({
      'phoneNumber': [null, Validators.required],
      'remark': null,
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

  onSubmit() {
    if (this.fg.valid) {
      this.svc.submitFormData(this.mcontentid, this.fg.value);
    }
  }

  onSelectAddressCreated() {
    let mcid_optiondialog = "gpsaddress-select";
    this.svc.showOptionDialog(mcid_optiondialog, {}).then((response) => {
      let status = response.isOk ? "ok" : "cancel";
      if (status == "ok") {
        let address = response.data.address;
        this.fg.get("phoneNumber").setValue(address.phoneNumber);
        this.fg.get("remark").setValue(address.remark);

        let location = address.location;
        this.svc.setGpsSection(location.title, location.realm, location.subDistrict, location.district, location.province, location.postalCode, location.accuracy, location.latitude, location.longitude, location.phoneNumber, location.remark);
      }
    });
  }
}
