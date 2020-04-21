import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { XdevTestBPage } from './xdev-test-b.page';

describe('XdevTestBPage', () => {
  let component: XdevTestBPage;
  let fixture: ComponentFixture<XdevTestBPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XdevTestBPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(XdevTestBPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
