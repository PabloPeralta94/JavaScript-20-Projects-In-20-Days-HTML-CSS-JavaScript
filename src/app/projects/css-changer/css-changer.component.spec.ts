import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssChangerComponent } from './css-changer.component';

describe('CssChangerComponent', () => {
  let component: CssChangerComponent;
  let fixture: ComponentFixture<CssChangerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssChangerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssChangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
