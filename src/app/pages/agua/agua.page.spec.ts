import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AguaPage } from './agua.page';

describe('AguaPage', () => {
  let component: AguaPage;
  let fixture: ComponentFixture<AguaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AguaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AguaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
