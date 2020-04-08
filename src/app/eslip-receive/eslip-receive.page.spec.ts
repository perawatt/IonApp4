import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EslipReceivePage } from './eslip-receive.page';

describe('EslipReceivePage', () => {
  let component: EslipReceivePage;
  let fixture: ComponentFixture<EslipReceivePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EslipReceivePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EslipReceivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
