import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextboxListaDesplegableComponent } from './textbox-lista-desplegable.component';

describe('TextboxListaDesplegableComponent', () => {
  let component: TextboxListaDesplegableComponent;
  let fixture: ComponentFixture<TextboxListaDesplegableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextboxListaDesplegableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextboxListaDesplegableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
