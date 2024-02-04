import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionProjectComponent } from './accordion-project.component';

describe('AccordionProjectComponent', () => {
  let component: AccordionProjectComponent;
  let fixture: ComponentFixture<AccordionProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordionProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccordionProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
