import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PpayPaymentCompletedPage } from './ppay-payment-completed.page';

describe('PpayPaymentCompletedPage', () => {
  let component: PpayPaymentCompletedPage;
  let fixture: ComponentFixture<PpayPaymentCompletedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpayPaymentCompletedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PpayPaymentCompletedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
