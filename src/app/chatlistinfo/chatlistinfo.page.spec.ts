import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChatlistinfoPage } from './chatlistinfo.page';

describe('ChatlistinfoPage', () => {
  let component: ChatlistinfoPage;
  let fixture: ComponentFixture<ChatlistinfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatlistinfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChatlistinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
