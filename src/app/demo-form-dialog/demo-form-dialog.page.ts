import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IonManaLib } from 'ion-m-lib';

@Component({
  selector: 'app-demo-form-dialog',
  templateUrl: './demo-form-dialog.page.html',
  styleUrls: ['./demo-form-dialog.page.scss'],
})
export class DemoFormDialogPage implements OnInit {

  private mcontentid: string = "637043008202197153";
  public status: any;
  public data: any;
  public msg: any;
  public pageStatus: string = "Init";
  public fg: FormGroup;

  constructor(private fb: FormBuilder, private svc: IonManaLib) {
    this.fg = this.fb.group({
      'amount': null,
    });
  }

  ngOnInit() {
  }


  ionViewDidEnter() {
    this.svc.initPageApi(this.mcontentid);
    this.svc.setStateChangedHandler((param) => this.OnStateChanged(param));
  }

  openDialog() {
    let param = { id: "coupon-default-id", name: "coupon-default" };
    let mcid_optiondialog = "637120760115263135";
    this.svc.showOptionDialog(mcid_optiondialog, param).then((response) => {
      this.status = response.isOk ? "ok" : "cancel";
      this.data = response.data;
      this.msg = this.data.name;
    });
  }

  openDialogThreeTime() {
    let param = { id: "coupon-default-id", name: "coupon-default" };
    let mcid_optiondialog = "637120760115263135";
    this.svc.showOptionDialog(mcid_optiondialog, param).then((response) => {
      alert("1st showOptionDialog: " + JSON.stringify(response));
    });

    this.svc.showOptionDialog(mcid_optiondialog, param).then((response) => {
      alert("2nd showOptionDialog: " + JSON.stringify(response));
    });

    this.svc.showOptionDialog(mcid_optiondialog, param).then((response) => {
      alert("3rd showOptionDialog: " + JSON.stringify(response));
    });
  }

  openDialogMistakeMCID() {
    let param = { id: "coupon-default-id", name: "coupon-default" };
    let mcid_optiondialog = "id-does-not-exist";
    this.svc.showOptionDialog(mcid_optiondialog, param).then((response) => {
      alert("mistake mcid showOptionDialog: " + JSON.stringify(response));
    });
  }

  OnStateChanged(state: string) {
    console.log("My state : " + state);
    this.pageStatus = state;
  }
}