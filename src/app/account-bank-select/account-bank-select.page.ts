import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IonManaLib } from 'ion-m-lib';

@Component({
  selector: 'app-account-bank-select',
  templateUrl: './account-bank-select.page.html',
  styleUrls: ['./account-bank-select.page.scss'],
})
export class AccountBankSelectPage implements OnInit {

  public hasLoaded: string;
  public data$ = Promise.resolve<{}>({});
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
    this.hasLoaded = null;
    let default$ = this.loadDefault$();
    default$.then((it: any) => {
      this.defaultValue = it;
      let load$ = this.loadDaa$();
      this.data$ = load$;
      load$.then((it: any[]) => {
        var selected = it.filter((item) => {
          return item._id == this.defaultValue._id;
        })[0];
        this.fg.get("id").setValue(selected.id);
        this.fg.get("name").setValue(selected.name);
        this.hasLoaded = it ? "y" : "n";
      });
    });
  }

  private loadDaa$() {
    return this.svc.initPageApi(this.mcontentid)
      .then(_ => {
        return this.svc.getApiData(this.mcontentid);
      })
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
