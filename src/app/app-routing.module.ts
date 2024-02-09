import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsArticlePopUpComponent } from './projects/news-article-pop-up/news-article-pop-up.component';
import { AccordionProjectComponent } from './projects/accordion-project/accordion-project.component';
import { CssChangerComponent } from './projects/css-changer/css-changer.component';
import { CounterWebApplicationComponent } from './projects/counter-web-application/counter-web-application.component';
import { LiveCharacterCountComponent } from './projects/live-character-count/live-character-count.component';
import { RandomNumberGeneratorComponent } from './projects/random-number-generator/random-number-generator.component';
import { WeightConverterComponent } from './projects/weight-converter/weight-converter.component';
import { LandingComponent } from './landing/landing/landing.component';
import { CodeEditorComponent } from './projects/code-editor/code-editor.component';
import { DayOfTheWeekComponent } from './projects/day-of-the-week/day-of-the-week.component';


const routes: Routes = [
  {path:'popup', component: NewsArticlePopUpComponent},
  {path:'trial', component: AccordionProjectComponent},
  {path:'csschanger', component: CssChangerComponent},
  {path:'counter', component: CounterWebApplicationComponent},
  {path:'charactercount', component: LiveCharacterCountComponent},
  {path:'randomnum', component: RandomNumberGeneratorComponent},
  {path:'weight', component: WeightConverterComponent},
  {path:'landing', component: LandingComponent},
  {path:'codeeditor', component: CodeEditorComponent},
  {path:'dayofweek', component: DayOfTheWeekComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
