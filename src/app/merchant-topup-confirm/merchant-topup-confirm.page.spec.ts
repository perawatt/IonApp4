import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MerchantTopupConfirmPage } from './merchant-topup-confirm.page';

describe('MerchantTopupConfirmPage', () => {
  let component: MerchantTopupConfirmPage;
  let fixture: ComponentFixture<MerchantTopupConfirmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantTopupConfirmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MerchantTopupConfirmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
