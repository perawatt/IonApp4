import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MerchantWithdrawPage } from './merchant-withdraw.page';

describe('MerchantWithdrawPage', () => {
  let component: MerchantWithdrawPage;
  let fixture: ComponentFixture<MerchantWithdrawPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantWithdrawPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MerchantWithdrawPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
