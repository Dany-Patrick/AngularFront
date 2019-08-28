import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioFComponent } from './formulario-f.component';

describe('FormularioFComponent', () => {
  let component: FormularioFComponent;
  let fixture: ComponentFixture<FormularioFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
