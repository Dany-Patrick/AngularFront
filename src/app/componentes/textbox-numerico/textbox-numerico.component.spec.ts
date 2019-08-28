import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextboxNumericoComponent } from './textbox-numerico.component';

describe('TextboxNumericoComponent', () => {
  let component: TextboxNumericoComponent;
  let fixture: ComponentFixture<TextboxNumericoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextboxNumericoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextboxNumericoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
