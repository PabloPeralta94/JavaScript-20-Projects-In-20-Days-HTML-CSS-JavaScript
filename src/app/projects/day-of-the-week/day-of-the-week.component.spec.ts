import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayOfTheWeekComponent } from './day-of-the-week.component';

describe('DayOfTheWeekComponent', () => {
  let component: DayOfTheWeekComponent;
  let fixture: ComponentFixture<DayOfTheWeekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayOfTheWeekComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DayOfTheWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
