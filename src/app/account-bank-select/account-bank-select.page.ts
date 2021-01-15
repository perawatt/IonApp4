import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IonManaLib } from 'ion-m-lib';

@Component({
  selector: 'app-account-bank-select',
  templateUrl: './account-bank-select.page.html',
  styleUrls: ['./account-bank-select.page.scss'],
})
export class AccountBankSelectPage implements OnInit {

  public data = [
    { id: "KTB", name: "กรุงไทย", logo: "assets/imgs/HowTo/BankLogo/ktb.png" },
    { id: "KBANK", name: "กสิกรไทย", logo: "assets/imgs/HowTo/BankLogo/kbank.png" },
    { id: "SCB", name: "ไทยพาณิชย์", logo: "assets/imgs/HowTo/BankLogo/scb.png" },
    { id: "TMB", name: "ทหารไทย", logo: "assets/imgs/HowTo/BankLogo/tmb.png" },
    { id: "BAY", name: "กรุงศรีอยุธยา", logo: "assets/imgs/HowTo/BankLogo/bay.png" },
    { id: "NBANK", name: "ธนชาติ", logo: "assets/imgs/HowTo/BankLogo/tbank.png" },
    { id: "BBL", name: "กรุงเทพ", logo: "assets/imgs/HowTo/BankLogo/bbl.png" },
    { id: "GSB", name: "ออมสิน", logo: "assets/imgs/HowTo/BankLogo/gsb.png" },
  ];
  public fg: FormGroup;
  private mcontentid = "account-bank-select";

  private defaultValue: any;

  constructor(private fb: FormBuilder, private svc: IonManaLib) {
    this.fg = this.fb.group({
      'id': null,
      'name': null
    });
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.refreshCallBack()
  }

  private refreshCallBack() {
    let default$ = this.loadDefault$();
    default$.then((it: any) => {
      this.defaultValue = it;
    });
  }

  private loadDefault$() {
    return this.svc.initPageApi(this.mcontentid)
      .then(_ => {
        return this.initOptionDialog$();
      })
  }

  private initOptionDialog$() {
    return this.svc.initOptionDialog(this.mcontentid, (response) => {
      if (response == "ok") {
        return this.fg.value;
      }
      else {
        console.log("Default");
        return this.defaultValue;
      }
    });
  }

  onSelectItem(item) {
    this.fg.get("id").setValue(item.id);
    this.fg.get("name").setValue(item.name);
  }

  onSave() {
    if (this.fg.valid) {
      console.log(this.fg.value);
    }
  }

  public isChecked(value): boolean {
    return this.fg.get("id").value == value.id;
  }

}
