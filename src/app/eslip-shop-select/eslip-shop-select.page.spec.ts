import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EslipShopSelectPage } from './eslip-shop-select.page';

describe('EslipShopSelectPage', () => {
  let component: EslipShopSelectPage;
  let fixture: ComponentFixture<EslipShopSelectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EslipShopSelectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EslipShopSelectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
