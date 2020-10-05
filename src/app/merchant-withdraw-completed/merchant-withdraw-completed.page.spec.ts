import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MerchantWithdrawCompletedPage } from './merchant-withdraw-completed.page';

describe('MerchantWithdrawCompletedPage', () => {
  let component: MerchantWithdrawCompletedPage;
  let fixture: ComponentFixture<MerchantWithdrawCompletedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantWithdrawCompletedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MerchantWithdrawCompletedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
