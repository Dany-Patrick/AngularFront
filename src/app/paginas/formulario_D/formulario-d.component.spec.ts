import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioDComponent } from './formulario-d.component';

describe('FormularioDComponent', () => {
  let component: FormularioDComponent;
  let fixture: ComponentFixture<FormularioDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
