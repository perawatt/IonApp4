import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SecurityAgreementPage } from './security-agreement.page';

describe('SecurityAgreementPage', () => {
  let component: SecurityAgreementPage;
  let fixture: ComponentFixture<SecurityAgreementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityAgreementPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SecurityAgreementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
