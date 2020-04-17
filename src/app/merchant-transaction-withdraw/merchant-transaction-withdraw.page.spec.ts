import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MerchantTransactionWithdrawPage } from './merchant-transaction-withdraw.page';

describe('MerchantTransactionWithdrawPage', () => {
  let component: MerchantTransactionWithdrawPage;
  let fixture: ComponentFixture<MerchantTransactionWithdrawPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantTransactionWithdrawPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MerchantTransactionWithdrawPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
