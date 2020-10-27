import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonManaLib } from 'ion-m-lib';

@Component({
  selector: 'app-merchant-profile-image-edit',
  templateUrl: './merchant-profile-image-edit.page.html',
  styleUrls: ['./merchant-profile-image-edit.page.scss'],
})
export class MerchantProfileImageEditPage implements OnInit {

  public hasImage: string;
  public imageResponse$;
  public hasLoaded: string;
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
    this.svc.initPageApi(this.mcontentid);
    this.svc.validForm(this.fg.valid);
    this.fg.get("imageId").reset();
    let load$ = this.svc.selectImage(this.mcontentid);
    this.imageResponse$ = load$;
    load$.then(it => {
      this.hasImage = it ? "y" : "n";
      if (it) { this.fg.get("imageId").setValue(it._id); }
    });
  }
  
  onSave() {
    if (this.fg.valid) {
      this.svc.submitFormData(this.mcontentid, this.fg.value);
    }
  }
}
