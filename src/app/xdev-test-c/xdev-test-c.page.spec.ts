import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { XdevTestCPage } from './xdev-test-c.page';

describe('XdevTestCPage', () => {
  let component: XdevTestCPage;
  let fixture: ComponentFixture<XdevTestCPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XdevTestCPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(XdevTestCPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
