import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsArticlePopUpComponent } from './projects/news-article-pop-up/news-article-pop-up.component';
import { AccordionProjectComponent } from './projects/accordion-project/accordion-project.component';
import { CssChangerComponent } from './projects/css-changer/css-changer.component';
import { CounterWebApplicationComponent } from './projects/counter-web-application/counter-web-application.component';

const routes: Routes = [
  {path:'popup', component: NewsArticlePopUpComponent},
  {path:'trial', component: AccordionProjectComponent },
  {path:'csschanger', component: CssChangerComponent},
  {path:'counter', component: CounterWebApplicationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
