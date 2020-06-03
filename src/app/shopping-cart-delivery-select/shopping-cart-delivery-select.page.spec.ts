import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShoppingCartDeliverySelectPage } from './shopping-cart-delivery-select.page';

describe('ShoppingCartDeliverySelectPage', () => {
  let component: ShoppingCartDeliverySelectPage;
  let fixture: ComponentFixture<ShoppingCartDeliverySelectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingCartDeliverySelectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShoppingCartDeliverySelectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
