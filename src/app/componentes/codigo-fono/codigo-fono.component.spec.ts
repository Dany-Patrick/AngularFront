import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodigoFonoComponent } from './codigo-fono.component';

describe('CodigoFonoComponent', () => {
  let component: CodigoFonoComponent;
  let fixture: ComponentFixture<CodigoFonoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodigoFonoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodigoFonoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
