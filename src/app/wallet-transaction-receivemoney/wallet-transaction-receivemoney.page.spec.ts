import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WalletTransactionReceivemoneyPage } from './wallet-transaction-receivemoney.page';

describe('WalletTransactionReceivemoneyPage', () => {
  let component: WalletTransactionReceivemoneyPage;
  let fixture: ComponentFixture<WalletTransactionReceivemoneyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletTransactionReceivemoneyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WalletTransactionReceivemoneyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
