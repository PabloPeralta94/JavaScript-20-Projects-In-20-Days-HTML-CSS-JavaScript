import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveCharacterCountComponent } from './live-character-count.component';

describe('LiveCharacterCountComponent', () => {
  let component: LiveCharacterCountComponent;
  let fixture: ComponentFixture<LiveCharacterCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveCharacterCountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiveCharacterCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
