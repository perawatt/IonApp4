import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrivilegeCartPage } from './privilege-cart.page';

describe('PrivilegeCartPage', () => {
  let component: PrivilegeCartPage;
  let fixture: ComponentFixture<PrivilegeCartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivilegeCartPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrivilegeCartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
