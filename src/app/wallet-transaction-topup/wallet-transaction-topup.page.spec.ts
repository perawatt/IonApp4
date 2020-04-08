import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WalletTransactionTopupPage } from './wallet-transaction-topup.page';

describe('WalletTransactionTopupPage', () => {
  let component: WalletTransactionTopupPage;
  let fixture: ComponentFixture<WalletTransactionTopupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletTransactionTopupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WalletTransactionTopupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
