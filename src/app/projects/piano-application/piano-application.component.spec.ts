import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PianoApplicationComponent } from './piano-application.component';

describe('PianoApplicationComponent', () => {
  let component: PianoApplicationComponent;
  let fixture: ComponentFixture<PianoApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PianoApplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PianoApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
