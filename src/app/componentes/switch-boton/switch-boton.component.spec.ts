import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchBotonComponent } from './switch-boton.component';

describe('SwitchBotonComponent', () => {
  let component: SwitchBotonComponent;
  let fixture: ComponentFixture<SwitchBotonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchBotonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchBotonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
