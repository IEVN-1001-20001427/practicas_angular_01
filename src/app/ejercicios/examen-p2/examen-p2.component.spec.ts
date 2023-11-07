import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenP2Component } from './examen-p2.component';

describe('ExamenP2Component', () => {
  let component: ExamenP2Component;
  let fixture: ComponentFixture<ExamenP2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExamenP2Component]
    });
    fixture = TestBed.createComponent(ExamenP2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
