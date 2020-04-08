import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EslipApprovedPage } from './eslip-approved.page';

describe('EslipApprovedPage', () => {
  let component: EslipApprovedPage;
  let fixture: ComponentFixture<EslipApprovedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EslipApprovedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EslipApprovedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
