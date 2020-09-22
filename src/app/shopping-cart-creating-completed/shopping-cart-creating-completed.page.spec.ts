import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShoppingCartCreatingCompletedPage } from './shopping-cart-creating-completed.page';

describe('ShoppingCartCreatingCompletedPage', () => {
  let component: ShoppingCartCreatingCompletedPage;
  let fixture: ComponentFixture<ShoppingCartCreatingCompletedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingCartCreatingCompletedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShoppingCartCreatingCompletedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
