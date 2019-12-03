import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioJComponent } from './formulario-j.component';

describe('FormularioJComponent', () => {
  let component: FormularioJComponent;
  let fixture: ComponentFixture<FormularioJComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioJComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioJComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
