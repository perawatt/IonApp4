import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonManaLib } from 'ion-m-lib';
import { ParseDataProvider } from 'src/providers/parse-data';

@Component({
  selector: 'app-account-create-bankaccount',
  templateUrl: './account-create-bankaccount.page.html',
  styleUrls: ['./account-create-bankaccount.page.scss'],
})
export class AccountCreateBankaccountPage implements OnInit {

  public fg: FormGroup;
  public displayBankName: string;
  private mcontentid = "account-create-bankaccount";

  constructor(private svc: IonManaLib, private fb: FormBuilder, private parse: ParseDataProvider) {
    this.fg = this.fb.group({
      'displayName': [null, Validators.required],
      'accountCode': ["KTB", Validators.required],
      'accountNumber': [null, Validators.required],
    });

    this.fg.valueChanges.subscribe(_ => {
      this.svc.validForm(this.fg.valid)
    });
    
    this.displayBankName = "กรุงไทย";
  }

  ngOnInit() {
  }

  openSelectBankDialog() {
    let defaultValue = { id: "KTB", name: "กรุงไทย" };
    let mcid_optiondialog = "account-bank-select";
    this.svc.showOptionDialog(mcid_optiondialog, defaultValue).then((response) => {
      let status = response.isOk ? "ok" : "cancel";
      if (status == "ok") {
        this.fg.get("accountCode").setValue(response.data.id);
        this.displayBankName = response.data.name;
      }
    });
  }

  onSave() {
    if (this.fg.valid) {
      this.svc.submitFormData(this.mcontentid, this.fg.value, true);
    }
  }

}
