import { Component, OnInit } from '@angular/core';
import { IonManaLib } from 'ion-m-lib';

declare function TheSHybridCall(methodName: string, parameter: any): void;
declare function TheSHybridFunc(methodName: string, parameter: string, callback: any): void;

@Component({
  selector: 'app-xdev-test-c',
  templateUrl: './xdev-test-c.page.html',
  styleUrls: ['./xdev-test-c.page.scss'],
})
export class XdevTestCPage implements OnInit {

  public data$: Promise<{}> = new Promise<{}>(_ => { });
  public value1: any;
  public value2: any;
  private mcontentid = "financial-menu";

  constructor(private svc: IonManaLib) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    let load$ = this.loadData$();
    this.data$ = load$;
    load$.then(it => {
    });
  }

  public initPage() {
    this.svc.initPageApiWithCallBack(this.mcontentid, () => this.refreshCallBack());
  }

  public initpageAndGetAPIData()
  {
    let load$ = this.loadData$();
    this.data$ = load$;
    load$.then(it => {
      
    });
  }

  public getAPIData() {
    this.data$ = this.svc.getApiData(this.mcontentid);
  }

  private loadData$() {
    return this.svc.initPageApi(this.mcontentid)
      .then(_ => {
        return this.svc.getApiData(this.mcontentid);
      })
  }

  private refreshCallBack()
  {
    alert("CallBack");
  }

  public reloadPage() {
    window.location.reload();
  }

  public async getMockDataValueBtn() {
    this.data$ = this.getMockDataValue();
  }

  public async getMockDatObjectBtn() {
    this.data$ = this.getMockDatObject();
  }

  getMockDataValue(): Promise<any> {
    var value = "I get value from ionic4";
    return this.callNativeFunc('getMockDataValue', value);
  }

  getMockDatObject(): Promise<any> {
    var obj = { name: "Ionic", version: 4, description: "I get object from Ionic4" };
    return this.callNativeFunc('getMockDataObject', JSON.stringify(obj));
  }

  sendString() {
    var value = "I come from ionic4";
    return this.callAppMethod('sendData', value);
  }

  sendNumber() {
    var value = 4;
    return this.callAppMethod('sendData', value);
  }

  sendObject() {
    var obj = { name: "Ionic", version: 4, description: "Text from Ionic4" };
    return this.callAppMethod('sendObj', JSON.stringify(obj));
  }

  private callAppMethod(fName: string, fParam: any) {
    return new Promise((resolve, reject) => {
      try {
        TheSHybridCall(fName, fParam);
        resolve({});
      } catch (error) {
        console.log(error);
        resolve("error callAppMethod : " + error);
      }
    });
  }

  private callNativeFunc(fName: string, fParam: string) {
    return new Promise((resolve, reject) => {
      try {
        TheSHybridFunc(fName, fParam, (rsp: any) => resolve(rsp));
      } catch (error) {
        resolve("error callNativeFunc : " + error);
      }
    });
  }
}
