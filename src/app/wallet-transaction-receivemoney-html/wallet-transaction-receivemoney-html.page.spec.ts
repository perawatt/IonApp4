import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WalletTransactionReceivemoneyHTMLPage } from './wallet-transaction-receivemoney-html.page';

describe('WalletTransactionReceivemoneyHTMLPage', () => {
  let component: WalletTransactionReceivemoneyHTMLPage;
  let fixture: ComponentFixture<WalletTransactionReceivemoneyHTMLPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletTransactionReceivemoneyHTMLPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WalletTransactionReceivemoneyHTMLPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
