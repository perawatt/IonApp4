import { Component, OnInit } from '@angular/core';
import { IonManaLib } from 'ion-m-lib';

declare function TheSHybridCall(methodName: string, parameter: any): void;
declare function TheSHybridFunc(methodName: string, parameter: string, callback: any): void;

@Component({
  selector: 'app-xdev-test',
  templateUrl: './xdev-test.page.html',
  styleUrls: ['./xdev-test.page.scss'],
})
export class XDevTestPage implements OnInit {

  public obj$: Promise<{}>;
  public value1: any;
  public value2: any;

  constructor(private svc: IonManaLib) {
  }
  
  ngOnInit() {
  }

  ionViewDidEnter() {
    this.svc.initPageApi("xtest");
  }

  public reloadPage() {
    window.location.reload();
  }

  public async getMockDataValueBtn() {
    this.obj$ = await this.getMockDataValue();
  }

  public async getMockDatObjectBtn() {
    this.obj$ = await this.getMockDatObject();
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
