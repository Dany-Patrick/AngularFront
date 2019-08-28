import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioEComponent } from './formulario-e.component';

describe('FormularioEComponent', () => {
  let component: FormularioEComponent;
  let fixture: ComponentFixture<FormularioEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
