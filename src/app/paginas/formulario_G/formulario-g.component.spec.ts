import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioGComponent } from './formulario-g.component';

describe('FormularioGComponent', () => {
  let component: FormularioGComponent;
  let fixture: ComponentFixture<FormularioGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
