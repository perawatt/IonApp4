import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShoppingCartCreatingAddCouponsPage } from './shopping-cart-creating-add-coupons.page';

describe('ShoppingCartCreatingAddCouponsPage', () => {
  let component: ShoppingCartCreatingAddCouponsPage;
  let fixture: ComponentFixture<ShoppingCartCreatingAddCouponsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingCartCreatingAddCouponsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShoppingCartCreatingAddCouponsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
