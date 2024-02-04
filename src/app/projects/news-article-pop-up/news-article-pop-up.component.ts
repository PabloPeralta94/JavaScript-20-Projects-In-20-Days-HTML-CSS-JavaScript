import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faXmarkCircle } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-news-article-pop-up',
  templateUrl: './news-article-pop-up.component.html',
  styleUrls: ['./news-article-pop-up.component.css']
})
export class NewsArticlePopUpComponent {
    closeIcon = faXmarkCircle;

  toggleNewsLetter() {   
      const newsLetter = document.getElementById("newsLetter");
  
      if (newsLetter) {
        newsLetter.classList.toggle("active");
      }
  
}

}
