import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { XDevTestPage } from './xdev-test.page';

describe('XDevTestPage', () => {
  let component: XDevTestPage;
  let fixture: ComponentFixture<XDevTestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XDevTestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(XDevTestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
