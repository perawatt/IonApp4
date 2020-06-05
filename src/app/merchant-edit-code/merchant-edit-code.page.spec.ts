import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MerchantEditCodePage } from './merchant-edit-code.page';

describe('MerchantEditCodePage', () => {
  let component: MerchantEditCodePage;
  let fixture: ComponentFixture<MerchantEditCodePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantEditCodePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MerchantEditCodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
