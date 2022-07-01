import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Checkout3Page } from './checkout3.page';

describe('Checkout3Page', () => {
  let component: Checkout3Page;
  let fixture: ComponentFixture<Checkout3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Checkout3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Checkout3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
