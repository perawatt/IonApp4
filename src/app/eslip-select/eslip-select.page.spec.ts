import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EslipSelectPage } from './eslip-select.page';

describe('EslipSelectPage', () => {
  let component: EslipSelectPage;
  let fixture: ComponentFixture<EslipSelectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EslipSelectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EslipSelectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
