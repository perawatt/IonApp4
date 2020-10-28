import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonManaLib } from 'ion-m-lib';

@Component({
  selector: 'app-user-profile-image-edit',
  templateUrl: './user-profile-image-edit.page.html',
  styleUrls: ['./user-profile-image-edit.page.scss'],
})
export class UserProfileImageEditPage implements OnInit {

  public previousImage: any;
  public hasPreviousImage: string;
  public hasImage: string;
  public imageResponse$;
  public fg: FormGroup;
  public formData$: Promise<{}> = new Promise<{}>(_ => { });
  private mcontentid = "user-profile-image-edit";

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
      this.previousImage = it.profileImageUrl;
      this.hasPreviousImage = it && it.profileImageUrl;
    });

    this.svc.validForm(this.fg.valid);
    this.fg.get("imageId").reset();
    this.onSelectImage();
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

  onSelectImage() {
    let selectImage$ = this.svc.selectImage(this.mcontentid);
    this.imageResponse$ = selectImage$;
    selectImage$.then(it => {
      this.hasImage = it && it.base64ImageRaw ? "y" : "n";
      if (this.hasImage == "y") {
        this.fg.get("imageId").setValue(it._id);
      }
    });
  }
}
