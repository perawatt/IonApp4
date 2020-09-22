import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShoppingCartCreatingPayPage } from './shopping-cart-creating-pay.page';

describe('ShoppingCartCreatingPayPage', () => {
  let component: ShoppingCartCreatingPayPage;
  let fixture: ComponentFixture<ShoppingCartCreatingPayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingCartCreatingPayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShoppingCartCreatingPayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
