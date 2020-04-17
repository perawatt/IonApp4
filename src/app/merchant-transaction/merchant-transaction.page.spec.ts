import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MerchantTransactionPage } from './merchant-transaction.page';

describe('MerchantTransactionPage', () => {
  let component: MerchantTransactionPage;
  let fixture: ComponentFixture<MerchantTransactionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantTransactionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MerchantTransactionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
