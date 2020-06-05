import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MerchantDepositPage } from './merchant-deposit.page';

describe('MerchantDepositPage', () => {
  let component: MerchantDepositPage;
  let fixture: ComponentFixture<MerchantDepositPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantDepositPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MerchantDepositPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
