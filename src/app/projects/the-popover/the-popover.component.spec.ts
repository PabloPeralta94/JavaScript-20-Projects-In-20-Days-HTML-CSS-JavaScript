import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThePopoverComponent } from './the-popover.component';

describe('ThePopoverComponent', () => {
  let component: ThePopoverComponent;
  let fixture: ComponentFixture<ThePopoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThePopoverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThePopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
