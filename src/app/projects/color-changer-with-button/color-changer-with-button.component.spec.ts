import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorChangerWithButtonComponent } from './color-changer-with-button.component';

describe('ColorChangerWithButtonComponent', () => {
  let component: ColorChangerWithButtonComponent;
  let fixture: ComponentFixture<ColorChangerWithButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorChangerWithButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorChangerWithButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
