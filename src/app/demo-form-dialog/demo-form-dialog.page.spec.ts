import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DemoFormDialogPage } from './demo-form-dialog.page';

describe('DemoFormDialogPage', () => {
  let component: DemoFormDialogPage;
  let fixture: ComponentFixture<DemoFormDialogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoFormDialogPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DemoFormDialogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
