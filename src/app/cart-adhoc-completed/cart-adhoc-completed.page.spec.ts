import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CartAdhocCompletedPage } from './cart-adhoc-completed.page';

describe('CartAdhocCompletedPage', () => {
  let component: CartAdhocCompletedPage;
  let fixture: ComponentFixture<CartAdhocCompletedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartAdhocCompletedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CartAdhocCompletedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
