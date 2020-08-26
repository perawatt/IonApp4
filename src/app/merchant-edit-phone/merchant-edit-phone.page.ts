import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IonManaLib } from 'ion-m-lib';

@Component({
  selector: 'app-merchant-edit-phone',
  templateUrl: './merchant-edit-phone.page.html',
  styleUrls: ['./merchant-edit-phone.page.scss'],
})
export class MerchantEditPhonePage implements OnInit {
  public hasLoaded: string;
  public fg: FormGroup;
  public formData$: Promise<{}> = new Promise<{}>(_ => { });
  private mcontentid = "merchant-edit-phone";

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

  ionViewDidEnter() {
    this.hasLoaded = null;
    let load$ = this.loadData$();
    this.formData$ = load$;
    load$.then(it => {
      this.svc.validForm(this.fg.valid);
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
