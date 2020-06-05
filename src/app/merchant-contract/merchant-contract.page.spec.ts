import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MerchantContractPage } from './merchant-contract.page';

describe('MerchantContractPage', () => {
  let component: MerchantContractPage;
  let fixture: ComponentFixture<MerchantContractPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantContractPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MerchantContractPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
