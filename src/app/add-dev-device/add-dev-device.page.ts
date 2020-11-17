import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonManaLib } from 'ion-m-lib';

@Component({
  selector: 'app-add-dev-device',
  templateUrl: './add-dev-device.page.html',
  styleUrls: ['./add-dev-device.page.scss'],
})
export class AddDevDevicePage implements OnInit {

  public hasLoaded: string;
  private mcontentid = "add-dev-device";
  public fg: FormGroup;

  public data$ = Promise.resolve<{}>({});

  constructor(private fb: FormBuilder, private svc: IonManaLib) {
    this.fg = this.fb.group({
      'zipId': [null, [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
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
    this.data$ = load$;
    load$.then(it => {
      this.svc.initPageApi(this.mcontentid);
      this.fg.get("zipId").setValue(it.zipId);
      this.hasLoaded = it ? "y" : "n";
    });
  }

  private loadData$() {
    return this.svc.initPageApi(this.mcontentid)
      .then(_ => {
        return this.svc.getApiData(this.mcontentid);
      })
  }

  onSave() {
    if (this.fg.valid) {
      this.svc.submitFormData(this.mcontentid, this.fg.value);
    }
  }

  public DeviceIdChanged() {
    let zipid = this.fg.get('zipId').value;
    let parseToFourDigit = zipid.substring(0, 4)
    this.fg.get('zipId').setValue(parseToFourDigit);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddDevDevicePage');
  }



}
