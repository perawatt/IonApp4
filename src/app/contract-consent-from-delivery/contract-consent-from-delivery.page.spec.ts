import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContractConsentFromDeliveryPage } from './contract-consent-from-delivery.page';

describe('ContractConsentFromDeliveryPage', () => {
  let component: ContractConsentFromDeliveryPage;
  let fixture: ComponentFixture<ContractConsentFromDeliveryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractConsentFromDeliveryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContractConsentFromDeliveryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
