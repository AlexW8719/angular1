import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jsa1Component } from './jsa1.component';

describe('Jsa1Component', () => {
  let component: Jsa1Component;
  let fixture: ComponentFixture<Jsa1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jsa1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jsa1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
