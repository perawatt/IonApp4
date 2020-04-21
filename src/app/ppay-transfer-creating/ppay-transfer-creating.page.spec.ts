import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PpayTransferCreatingPage } from './ppay-transfer-creating.page';

describe('PpayTransferCreatingPage', () => {
  let component: PpayTransferCreatingPage;
  let fixture: ComponentFixture<PpayTransferCreatingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpayTransferCreatingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PpayTransferCreatingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
