import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioHComponent } from './formulario-h.component';

describe('FormularioHComponent', () => {
  let component: FormularioHComponent;
  let fixture: ComponentFixture<FormularioHComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioHComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
