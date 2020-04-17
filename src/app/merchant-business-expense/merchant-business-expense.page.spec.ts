import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MerchantBusinessExpensePage } from './merchant-business-expense.page';

describe('MerchantBusinessExpensePage', () => {
  let component: MerchantBusinessExpensePage;
  let fixture: ComponentFixture<MerchantBusinessExpensePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantBusinessExpensePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MerchantBusinessExpensePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
