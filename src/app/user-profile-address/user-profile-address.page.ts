import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonManaLib } from 'ion-m-lib';

@Component({
  selector: 'app-user-profile-address',
  templateUrl: './user-profile-address.page.html',
  styleUrls: ['./user-profile-address.page.scss'],
})
export class UserProfileAddressPage implements OnInit {

  public hasLoaded: string;
  public data$ = Promise.resolve<{}>({});
  public shippingAddressIndex : number;
  public billingAddressIndex : number;  
  private mcontentid = "user-profile-address";
  constructor(private svc: IonManaLib) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.svc.addToolbarAction((action) => this.onTabToolbarItem(action));
    this.refreshCallBack();
  }

  private loadData$() {
    return this.svc.initPageApiWithCallBack(this.mcontentid, () => this.refreshCallBack())
      .then(_ => {
        return this.svc.getApiData(this.mcontentid);
      })
  }

  private refreshCallBack() {
    this.hasLoaded = null;
    let load$ = this.loadData$();
    this.data$ = load$;    
    load$.then(it => {      
      this.shippingAddressIndex = it.addresses.findIndex(addrs => addrs.address._id == it.shippingAddressId);  
      this.billingAddressIndex = it.addresses.findIndex(addrs => addrs.address._id == it.billingAddressId);  
      this.hasLoaded = it.addresses == null || it.addresses.length == 0 ? "n" : "y";   
    });
  }

  public onTabToolbarItem(action) {
    switch (action) {
      case "Add": this.Add(); break;
      default : break;
    }
  }

  public Add() {
    this.svc.visitEndpoint(this.mcontentid, "https://s.manal.ink/profile/address")
  }

  public onSelectEditAddress(addressId: string) {
    this.svc.visitEndpoint(this.mcontentid, "https://s.manal.ink/profile/address/npflads-" + addressId)
  }

}
