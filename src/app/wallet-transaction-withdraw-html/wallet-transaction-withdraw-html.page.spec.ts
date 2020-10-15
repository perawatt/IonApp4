import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WalletTransactionWithdrawHTMLPage } from './wallet-transaction-withdraw-html.page';

describe('WalletTransactionWithdrawHTMLPage', () => {
  let component: WalletTransactionWithdrawHTMLPage;
  let fixture: ComponentFixture<WalletTransactionWithdrawHTMLPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletTransactionWithdrawHTMLPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WalletTransactionWithdrawHTMLPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
