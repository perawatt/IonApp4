import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReminderMessagePage } from './reminder-message.page';

describe('ReminderMessagePage', () => {
  let component: ReminderMessagePage;
  let fixture: ComponentFixture<ReminderMessagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReminderMessagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReminderMessagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
