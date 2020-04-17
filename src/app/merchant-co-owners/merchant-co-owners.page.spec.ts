import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MerchantCoOwnersPage } from './merchant-co-owners.page';

describe('MerchantCoOwnersPage', () => {
  let component: MerchantCoOwnersPage;
  let fixture: ComponentFixture<MerchantCoOwnersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantCoOwnersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MerchantCoOwnersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
