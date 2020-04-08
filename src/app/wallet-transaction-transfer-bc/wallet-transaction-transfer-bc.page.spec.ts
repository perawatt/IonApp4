import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WalletTransactionTransferBcPage } from './wallet-transaction-transfer-bc.page';

describe('WalletTransactionTransferBcPage', () => {
  let component: WalletTransactionTransferBcPage;
  let fixture: ComponentFixture<WalletTransactionTransferBcPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletTransactionTransferBcPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WalletTransactionTransferBcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
