import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextboxPorcentajeComponent } from './textbox-porcentaje.component';

describe('TextboxPorcentajeComponent', () => {
  let component: TextboxPorcentajeComponent;
  let fixture: ComponentFixture<TextboxPorcentajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextboxPorcentajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextboxPorcentajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
