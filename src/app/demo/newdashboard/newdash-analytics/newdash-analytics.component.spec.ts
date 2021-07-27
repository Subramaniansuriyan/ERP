import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDashAnalyticsComponent } from './newdash-analytics.component';

describe('DashAnalyticsComponent', () => {
  let component: NewDashAnalyticsComponent;
  let fixture: ComponentFixture<NewDashAnalyticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDashAnalyticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDashAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
