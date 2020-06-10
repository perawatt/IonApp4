import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MerchantWithdrawConfirmPage } from './merchant-withdraw-confirm.page';

describe('MerchantWithdrawConfirmPage', () => {
  let component: MerchantWithdrawConfirmPage;
  let fixture: ComponentFixture<MerchantWithdrawConfirmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantWithdrawConfirmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MerchantWithdrawConfirmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
