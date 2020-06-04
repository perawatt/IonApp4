import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MerchantEmployeePage } from './merchant-employee.page';

describe('MerchantEmployeePage', () => {
  let component: MerchantEmployeePage;
  let fixture: ComponentFixture<MerchantEmployeePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantEmployeePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MerchantEmployeePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
