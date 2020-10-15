import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ParseDataProvider } from 'src/providers/parse-data';

@Component({
  selector: 'app-wallet-transaction-adhoc-html',
  templateUrl: './wallet-transaction-adhoc-html.page.html',
  styleUrls: ['./wallet-transaction-adhoc-html.page.scss'],
})
export class WalletTransactionAdhocHTMLPage implements OnInit {

  public data: any;
  constructor(private route: ActivatedRoute, private http: HttpClient, private parse: ParseDataProvider) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params && params.id) {
        this.http.get("https://mana-gateway-dev.azurewebsites.net/mcontent/data/wallet-transaction-adhoc/" + params.id)
          .subscribe(data => {
            this.data = data;
          });
      }
    });
  }

  public ParseToTwoDecimal(value: number) { return this.parse.ParseToTwoDecimal(value); }
}
