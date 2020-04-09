import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReminderFormPage } from './reminder-form.page';

describe('ReminderFormPage', () => {
  let component: ReminderFormPage;
  let fixture: ComponentFixture<ReminderFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReminderFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReminderFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
