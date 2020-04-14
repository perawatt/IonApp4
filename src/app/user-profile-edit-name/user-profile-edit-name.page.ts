import { Component, OnInit } from '@angular/core';
import { IonManaLib } from 'ion-m-lib';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-profile-edit-name',
  templateUrl: './user-profile-edit-name.page.html',
  styleUrls: ['./user-profile-edit-name.page.scss'],
})
export class UserProfileEditNamePage implements OnInit {

  public hasLoaded: string;
  public fg: FormGroup;
  public formData$: Promise<{}> = new Promise<{}>(_ => { });
  private mcontentid = "user-profile-edit-name";

  constructor(private fb: FormBuilder, private svc: IonManaLib) {
    this.fg = this.fb.group({
      '_id': null,
      'userId': null,
      'email': null,
      'profileImageUrl': null,
      'displayName': [null, Validators.required],
      'titleTH': null,
      'firstNameTH': null,
      'lastNameTH': null,
      'titleEN': null,
      'firstNameEN': null,
      'lastNameEN': null
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

  onSave() {
    if (this.fg.valid) {
      this.svc.submitFormData(this.mcontentid, this.fg.value);
    }
  }

}
