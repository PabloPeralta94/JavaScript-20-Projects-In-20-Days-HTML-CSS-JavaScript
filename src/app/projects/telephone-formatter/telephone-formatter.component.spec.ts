import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelephoneFormatterComponent } from './telephone-formatter.component';

describe('TelephoneFormatterComponent', () => {
  let component: TelephoneFormatterComponent;
  let fixture: ComponentFixture<TelephoneFormatterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelephoneFormatterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelephoneFormatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
