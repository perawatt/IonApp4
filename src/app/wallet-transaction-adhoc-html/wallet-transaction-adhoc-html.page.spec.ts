import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WalletTransactionAdhocHTMLPage } from './wallet-transaction-adhoc-html.page';

describe('WalletTransactionAdhocHTMLPage', () => {
  let component: WalletTransactionAdhocHTMLPage;
  let fixture: ComponentFixture<WalletTransactionAdhocHTMLPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletTransactionAdhocHTMLPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WalletTransactionAdhocHTMLPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
