import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EslipWaitApprovePage } from './eslip-wait-approve.page';

describe('EslipWaitApprovePage', () => {
  let component: EslipWaitApprovePage;
  let fixture: ComponentFixture<EslipWaitApprovePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EslipWaitApprovePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EslipWaitApprovePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
