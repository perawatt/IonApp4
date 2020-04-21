import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PpayPaymentCreatingPage } from './ppay-payment-creating.page';

describe('PpayPaymentCreatingPage', () => {
  let component: PpayPaymentCreatingPage;
  let fixture: ComponentFixture<PpayPaymentCreatingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpayPaymentCreatingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PpayPaymentCreatingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
