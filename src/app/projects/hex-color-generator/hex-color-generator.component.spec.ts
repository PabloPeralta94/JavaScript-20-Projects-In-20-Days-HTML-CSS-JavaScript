import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HexColorGeneratorComponent } from './hex-color-generator.component';

describe('HexColorGeneratorComponent', () => {
  let component: HexColorGeneratorComponent;
  let fixture: ComponentFixture<HexColorGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HexColorGeneratorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HexColorGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
