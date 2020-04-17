import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MerchantQrReceiveMoneyPage } from './merchant-qr-receive-money.page';

describe('MerchantQrReceiveMoneyPage', () => {
  let component: MerchantQrReceiveMoneyPage;
  let fixture: ComponentFixture<MerchantQrReceiveMoneyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantQrReceiveMoneyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MerchantQrReceiveMoneyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
