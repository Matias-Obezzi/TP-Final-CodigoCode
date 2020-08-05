import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosCursoComponent } from './datos-curso.component';

describe('DatosCursoComponent', () => {
  let component: DatosCursoComponent;
  let fixture: ComponentFixture<DatosCursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosCursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
