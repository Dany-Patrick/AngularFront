import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioBComponent } from './formulario-b.component';

describe('FormularioBComponent', () => {
  let component: FormularioBComponent;
  let fixture: ComponentFixture<FormularioBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
