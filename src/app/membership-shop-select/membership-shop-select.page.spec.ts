import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MembershipShopSelectPage } from './membership-shop-select.page';

describe('MembershipShopSelectPage', () => {
  let component: MembershipShopSelectPage;
  let fixture: ComponentFixture<MembershipShopSelectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembershipShopSelectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MembershipShopSelectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
