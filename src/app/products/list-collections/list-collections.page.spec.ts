import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListCollectionsPage } from './list-collections.page';

describe('ListCollectionsPage', () => {
  let component: ListCollectionsPage;
  let fixture: ComponentFixture<ListCollectionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCollectionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListCollectionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
