import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MembershipAgreementPage } from './membership-agreement.page';

describe('MembershipAgreementPage', () => {
  let component: MembershipAgreementPage;
  let fixture: ComponentFixture<MembershipAgreementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembershipAgreementPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MembershipAgreementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
