import { Component, OnInit } from '@angular/core';
import { IonManaLib, confirmMessage } from 'ion-m-lib';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contract-consent-from-shop',
  templateUrl: './contract-consent-from-shop.page.html',
  styleUrls: ['./contract-consent-from-shop.page.scss'],
})
export class ContractConsentFromShopPage implements OnInit {

  public hasLoaded: string;
  public data$ = Promise.resolve<{}>({});
  public title = "การขออนุญาต";
  public fg: FormGroup;
  private mcontentid = "contract-consent-from-shop";
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
        return this.svc.callApiGet(this.mcontentid,"https://mana-facing-dev.azurewebsites.net/Contract/shipping/consent/a");
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
