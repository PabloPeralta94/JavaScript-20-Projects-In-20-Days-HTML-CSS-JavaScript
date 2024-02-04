import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteAMessageComponent } from './write-a-message.component';

describe('WriteAMessageComponent', () => {
  let component: WriteAMessageComponent;
  let fixture: ComponentFixture<WriteAMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WriteAMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WriteAMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
