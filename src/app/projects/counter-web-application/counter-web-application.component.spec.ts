import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterWebApplicationComponent } from './counter-web-application.component';

describe('CounterWebApplicationComponent', () => {
  let component: CounterWebApplicationComponent;
  let fixture: ComponentFixture<CounterWebApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterWebApplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterWebApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
