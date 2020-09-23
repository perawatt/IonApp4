import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CartAdhocCreatingPage } from './cart-adhoc-creating.page';

describe('CartAdhocCreatingPage', () => {
  let component: CartAdhocCreatingPage;
  let fixture: ComponentFixture<CartAdhocCreatingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartAdhocCreatingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CartAdhocCreatingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
