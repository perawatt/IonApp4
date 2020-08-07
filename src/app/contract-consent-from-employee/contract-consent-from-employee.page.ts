import { Component, OnInit } from '@angular/core';
import { IonManaLib, confirmMessage } from 'ion-m-lib';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contract-consent-from-employee',
  templateUrl: './contract-consent-from-employee.page.html',
  styleUrls: ['./contract-consent-from-employee.page.scss'],
})
export class ContractConsentFromEmployeePage implements OnInit {

  public hasLoaded: string;
  public data$ = Promise.resolve<{}>({});
  public title = "การขออนุญาต";
  public fg: FormGroup;
  private mcontentid = "contract-consent-from-employee";
  constructor(private fb: FormBuilder, private svc: IonManaLib) {
    this.fg = this.fb.group({
      'isAgree': [null, Validators.required],
    });

    this.fg.valueChanges.subscribe(_ => {
      this.svc.validForm(this.fg.valid)
    });
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.svc.validForm(this.fg.valid);
    this.hasLoaded = null;
    let load$ = this.loadData$();
    this.data$ = load$;
    load$.then(it => {
      this.svc.initPageApi(this.mcontentid);
      console.log(it);
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
      
      let msg = this.fg.get("isAgree").value == "true" ? "ยืนยันข้อตกลง" : "ปฏิเสธข้อตกลง";

      let message = new confirmMessage("",
        "<span style=\"color: Black; \">คุณต้องการ" + msg + "</span>"
      );

      this.svc.confirmForm(message).then(resolve => {
        if (resolve.isConfirm) {
          let isAgree = this.fg.get("isAgree").value;
          this.fg.get("isAgree").setValue(isAgree == "true");
          this.svc.submitFormData(this.mcontentid, this.fg.value);
        }
      });
    }
  }
}
