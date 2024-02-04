import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsArticlePopUpComponent } from './news-article-pop-up.component';

describe('NewsArticlePopUpComponent', () => {
  let component: NewsArticlePopUpComponent;
  let fixture: ComponentFixture<NewsArticlePopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsArticlePopUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsArticlePopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
