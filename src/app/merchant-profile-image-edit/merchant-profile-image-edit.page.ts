import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonManaLib } from 'ion-m-lib';
import { join } from 'path';

@Component({
  selector: 'app-merchant-profile-image-edit',
  templateUrl: './merchant-profile-image-edit.page.html',
  styleUrls: ['./merchant-profile-image-edit.page.scss'],
})
export class MerchantProfileImageEditPage implements OnInit {

  public previousImage: any;
  public hasPreviousImage: string;
  public hasImage: string;
  public imageResponse$;
  public fg: FormGroup;
  public formData$: Promise<{}> = new Promise<{}>(_ => { });
  private mcontentid = "merchant-profile-image-edit";

  constructor(private fb: FormBuilder, private svc: IonManaLib) {
    this.fg = this.fb.group({
      'imageId': [null, Validators.required],
    });
    this.fg.valueChanges.subscribe(_ => {
      this.svc.validForm(this.fg.valid)
    });
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.hasImage = null;

    let load$ = this.loadData$();
    load$.then((it: any) => {
      this.previousImage = it.logo;
      this.hasPreviousImage = it && it.logo;
    });

    this.svc.validForm(this.fg.valid);
    this.fg.get("imageId").reset();
    let selectImage$ = this.svc.selectImage(this.mcontentid);
    this.imageResponse$ = selectImage$;
    selectImage$.then(it => {
      this.hasImage = it && it.base64ImageRaw ? "y" : "n";
      if (this.hasImage == "y") {
        this.fg.get("imageId").setValue(it._id);
      }
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
}
