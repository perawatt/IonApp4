import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IonManaLib } from 'ion-m-lib';

@Component({
  selector: 'app-demo-form-dialog-info',
  templateUrl: './demo-form-dialog-info.page.html',
  styleUrls: ['./demo-form-dialog-info.page.scss'],
})
export class DemoFormDialogInfoPage implements OnInit {

  private mcontentid: string = "637120760115263135";
  public data$= [ 
    { id: "coupon-default-id", name: "coupon-default" }, 
    { id: "coupon-1", name: "coupon-1" },
    { id: "coupon-2", name: "coupon-2" }
  ];
  private defaultValue: any = { name: "" };
  public fg: FormGroup;

  constructor(private fb: FormBuilder, private svc: IonManaLib) {
    this.fg = this.fb.group({
      'couponType': null,
    });
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    let load$ = this.loadData$();
    load$.then((it: any) => {
      this.defaultValue = it;
    });
  }

  private loadData$() {
    return this.svc.initPageApi(this.mcontentid)
      .then(_ => {
        return this.initOptionDialog$();
      })
  }
  private initOptionDialog$() {
    return this.svc.initOptionDialog(this.mcontentid, (response) => {
      if (response == "ok") {
        console.log("Set OK");
        return this.fg.get("couponType").value;
      }
      else {
        console.log("Default");
        return this.defaultValue;
      }
    });
  }

  onSave() {
    if (this.fg.valid) {
      console.log(this.fg.value);
    }
  }

  onSelectCoupon(item) {
    this.fg.get("couponType").setValue(item);
  }

  isChecked(value): boolean {
    return this.fg.get("couponType").value == value;
  }
}

