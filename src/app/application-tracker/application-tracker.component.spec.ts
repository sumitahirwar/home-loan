import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationTrackerComponent } from './application-tracker.component';

describe('ApplicationTrackerComponent', () => {
  let component: ApplicationTrackerComponent;
  let fixture: ComponentFixture<ApplicationTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
