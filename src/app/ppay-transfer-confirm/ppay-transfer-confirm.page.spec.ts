import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PpayTransferConfirmPage } from './ppay-transfer-confirm.page';

describe('PpayTransferConfirmPage', () => {
  let component: PpayTransferConfirmPage;
  let fixture: ComponentFixture<PpayTransferConfirmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpayTransferConfirmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PpayTransferConfirmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
