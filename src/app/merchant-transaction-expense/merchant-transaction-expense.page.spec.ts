import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MerchantTransactionExpensePage } from './merchant-transaction-expense.page';

describe('MerchantTransactionExpensePage', () => {
  let component: MerchantTransactionExpensePage;
  let fixture: ComponentFixture<MerchantTransactionExpensePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantTransactionExpensePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MerchantTransactionExpensePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
