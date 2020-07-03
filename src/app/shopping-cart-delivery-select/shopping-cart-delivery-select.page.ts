import { Component, OnInit } from '@angular/core';
import { IonManaLib } from 'ion-m-lib';
import { FormGroup, FormBuilder } from '@angular/forms';
import { promise } from 'protractor';

@Component({
  selector: 'app-shopping-cart-delivery-select',
  templateUrl: './shopping-cart-delivery-select.page.html',
  styleUrls: ['./shopping-cart-delivery-select.page.scss'],
})
export class ShoppingCartDeliverySelectPage implements OnInit {
  private mcontentid = "shopping-cart-delivery-select";

  public hasLoaded: string;
  public data$ = Promise.resolve<{}>({});
  public title: string = "เลือกผู้จัดส่ง";
  public fg: FormGroup;

  private defaultValue: any;

  constructor(private fb: FormBuilder, private svc: IonManaLib) {
    this.fg = this.fb.group({
      'delivery': null,
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
      load$.then((it:any[]) => {
        var selected = it.filter((item)=>{
          return item._id == this.defaultValue._id;
        })[0];
        this.fg.get("delivery").setValue(selected);
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
        return this.fg.get("delivery").value;
      }
      else {
        console.log("Default");
        return this.defaultValue;
      }
    });
  }

  onSelectDelivery(item) {
    this.fg.get("delivery").setValue(item);
    console.log(JSON.stringify(this.fg.get("delivery").value));
  }

  onSave() {
    if (this.fg.valid) {
      console.log(this.fg.value);
    }
  }

  public isChecked(value): boolean {
    return this.fg.get("delivery").value == value;
  }
}