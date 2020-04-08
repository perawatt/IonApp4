import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShoppingCartCreatingAddPointsPage } from './shopping-cart-creating-add-points.page';

describe('ShoppingCartCreatingAddPointsPage', () => {
  let component: ShoppingCartCreatingAddPointsPage;
  let fixture: ComponentFixture<ShoppingCartCreatingAddPointsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingCartCreatingAddPointsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShoppingCartCreatingAddPointsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
