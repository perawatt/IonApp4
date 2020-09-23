import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CartAdhocPayPage } from './cart-adhoc-pay.page';

describe('CartAdhocPayPage', () => {
  let component: CartAdhocPayPage;
  let fixture: ComponentFixture<CartAdhocPayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartAdhocPayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CartAdhocPayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
