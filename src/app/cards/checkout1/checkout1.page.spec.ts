import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Checkout1Page } from './checkout1.page';

describe('Checkout1Page', () => {
  let component: Checkout1Page;
  let fixture: ComponentFixture<Checkout1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Checkout1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Checkout1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
