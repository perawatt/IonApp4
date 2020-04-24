import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DemoFormDialogInfoPage } from './demo-form-dialog-info.page';

describe('DemoFormDialogInfoPage', () => {
  let component: DemoFormDialogInfoPage;
  let fixture: ComponentFixture<DemoFormDialogInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoFormDialogInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DemoFormDialogInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
