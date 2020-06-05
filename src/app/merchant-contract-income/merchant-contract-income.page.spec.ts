import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MerchantContractIncomePage } from './merchant-contract-income.page';

describe('MerchantContractIncomePage', () => {
  let component: MerchantContractIncomePage;
  let fixture: ComponentFixture<MerchantContractIncomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantContractIncomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MerchantContractIncomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
