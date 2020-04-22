import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IonManaLib } from 'ion-m-lib';
import { ParseDataProvider } from 'src/providers/parse-data';

@Component({
  selector: 'app-shopping-add-product',
  templateUrl: './shopping-add-product.page.html',
  styleUrls: ['./shopping-add-product.page.scss'],
})
export class ShoppingAddProductPage implements OnInit {

  private hasLoaded: string;
  private mcontentid: string = "shopping-add-product";
  public data$ = Promise.resolve<{}>({});
  public fg: FormGroup;

  constructor(private fb: FormBuilder, private svc: IonManaLib, private parse: ParseDataProvider) {
    this.fg = fb.group({
      'size': []
    });
  }

  ngOnInit() {
  }

  ionViewDidLoad() {
    this.hasLoaded = null;
    let load$ = this.loadData$();
    this.data$ = load$;
    load$.then(it => {
      this.hasLoaded = it ? "y" : "n";
    });
  }

  private loadData$() {
    return this.svc.initPageApi(this.mcontentid)
      .then(_ => {
        return this.svc.getApiData(this.mcontentid);
      })
  }

  addProduct() {
    this.svc.submitFormData(this.mcontentid, this.fg.value);
  }

  public ParseToTwoDecimal(value: number) { return this.parse.ParseToTwoDecimal(value); }
}
