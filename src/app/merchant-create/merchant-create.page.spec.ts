import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MerchantCreatePage } from './merchant-create.page';

describe('MerchantCreatePage', () => {
  let component: MerchantCreatePage;
  let fixture: ComponentFixture<MerchantCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantCreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MerchantCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
