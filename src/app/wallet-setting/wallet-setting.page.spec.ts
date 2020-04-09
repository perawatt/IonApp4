import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WalletSettingPage } from './wallet-setting.page';

describe('WalletSettingPage', () => {
  let component: WalletSettingPage;
  let fixture: ComponentFixture<WalletSettingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletSettingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WalletSettingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
