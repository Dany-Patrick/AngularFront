import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextboxEnteroComponent } from './textbox-entero.component';

describe('TextboxEnteroComponent', () => {
  let component: TextboxEnteroComponent;
  let fixture: ComponentFixture<TextboxEnteroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextboxEnteroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextboxEnteroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
