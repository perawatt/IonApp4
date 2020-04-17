import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MerchantTransactionTopupPage } from './merchant-transaction-topup.page';

describe('MerchantTransactionTopupPage', () => {
  let component: MerchantTransactionTopupPage;
  let fixture: ComponentFixture<MerchantTransactionTopupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantTransactionTopupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MerchantTransactionTopupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
