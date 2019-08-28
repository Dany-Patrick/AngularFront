import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextboxTextoComponent } from './textbox-texto.component';

describe('TextboxTextoComponent', () => {
  let component: TextboxTextoComponent;
  let fixture: ComponentFixture<TextboxTextoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextboxTextoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextboxTextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
