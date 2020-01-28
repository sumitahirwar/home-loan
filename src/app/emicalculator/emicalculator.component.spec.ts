import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmicalculatorComponent } from './emicalculator.component';

describe('EmicalculatorComponent', () => {
  let component: EmicalculatorComponent;
  let fixture: ComponentFixture<EmicalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmicalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmicalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
