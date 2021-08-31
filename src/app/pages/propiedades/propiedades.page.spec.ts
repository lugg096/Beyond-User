import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PropiedadesPage } from './propiedades.page';

describe('PropiedadesPage', () => {
  let component: PropiedadesPage;
  let fixture: ComponentFixture<PropiedadesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropiedadesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PropiedadesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
