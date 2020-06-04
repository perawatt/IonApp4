import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MerchantBudgetPage } from './merchant-budget.page';

describe('MerchantBudgetPage', () => {
  let component: MerchantBudgetPage;
  let fixture: ComponentFixture<MerchantBudgetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantBudgetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MerchantBudgetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
