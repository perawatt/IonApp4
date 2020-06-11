import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContractConsentFromEmployeePage } from './contract-consent-from-employee.page';

describe('ContractConsentFromEmployeePage', () => {
  let component: ContractConsentFromEmployeePage;
  let fixture: ComponentFixture<ContractConsentFromEmployeePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractConsentFromEmployeePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContractConsentFromEmployeePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
