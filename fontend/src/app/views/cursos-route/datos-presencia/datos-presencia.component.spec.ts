import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosPresenciaComponent } from './datos-presencia.component';

describe('DatosPresenciaComponent', () => {
  let component: DatosPresenciaComponent;
  let fixture: ComponentFixture<DatosPresenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosPresenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosPresenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
