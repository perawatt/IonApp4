import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContractConsentFromShopPage } from './contract-consent-from-shop.page';

describe('ContractConsentFromShopPage', () => {
  let component: ContractConsentFromShopPage;
  let fixture: ComponentFixture<ContractConsentFromShopPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractConsentFromShopPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContractConsentFromShopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
