import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WalletTransactionTopupHTMLPage } from './wallet-transaction-topup-html.page';

describe('WalletTransactionTopupHTMLPage', () => {
  let component: WalletTransactionTopupHTMLPage;
  let fixture: ComponentFixture<WalletTransactionTopupHTMLPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletTransactionTopupHTMLPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WalletTransactionTopupHTMLPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
