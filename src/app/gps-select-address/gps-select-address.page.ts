import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IonManaLib } from 'ion-m-lib';

@Component({
  selector: 'app-gps-select-address',
  templateUrl: './gps-select-address.page.html',
  styleUrls: ['./gps-select-address.page.scss'],
})
export class GpsSelectAddressPage implements OnInit {

  private mcontentid = "gps-select-address";
  public title = "ที่อยู่ใกล้เคียง";
  public data$ = Promise.resolve<{}>({});
  public fg: FormGroup;
  private defaultValue: any;
  constructor(private fb: FormBuilder, private svc: IonManaLib) {
    this.fg = this.fb.group({
      'address': null,
    });
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    let default$ = this.loadDefault$();
    default$.then(() => {
      let load$ = this.loadDaa$();
      this.data$ = load$;
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
        return this.defaultValue;
      }
    });
  }

  public isSelected(item: string) {
    return     this.fg.get("address").value == item;
  }

  public onItemSelected(item: string) {
    this.fg.get("address").setValue(item);
  }

  onSave() {
    if (this.fg.valid) {
      console.log(this.fg.value);
    }
  }

  displayHeader(item: string) {
    return item.split('\r\n')[0];
  }

  displayDetail(item: string) {
    var strArray = item.split('\r\n');
    if (strArray.length > 1)
      return strArray[1];
    else
      return "";
  }
}
