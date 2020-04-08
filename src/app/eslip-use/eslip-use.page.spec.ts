import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EslipUsePage } from './eslip-use.page';

describe('EslipUsePage', () => {
  let component: EslipUsePage;
  let fixture: ComponentFixture<EslipUsePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EslipUsePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EslipUsePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
