import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsArticlePopUpComponent } from './news-article-pop-up/news-article-pop-up.component';
import { CssChangerComponent } from './css-changer/css-changer.component';
import { CounterWebApplicationComponent } from './counter-web-application/counter-web-application.component';
import { LiveCharacterCountComponent } from './live-character-count/live-character-count.component';
import { RandomNumberGeneratorComponent } from './random-number-generator/random-number-generator.component';
import { WeightConverterComponent } from './weight-converter/weight-converter.component';
import { CodeEditorComponent } from './code-editor/code-editor.component';
import { DayOfTheWeekComponent } from './day-of-the-week/day-of-the-week.component';
import { StopWatchComponent } from './stop-watch/stop-watch.component';
import { WriteAMessageComponent } from './write-a-message/write-a-message.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { ColorChangerWithButtonComponent } from './color-changer-with-button/color-changer-with-button.component';
import { AccordionProjectComponent } from './accordion-project/accordion-project.component';
import { TelephoneFormatterComponent } from './telephone-formatter/telephone-formatter.component';
import { CursorAnimationComponent } from './cursor-animation/cursor-animation.component';
import { HexColorGeneratorComponent } from './hex-color-generator/hex-color-generator.component';
import { PianoApplicationComponent } from './piano-application/piano-application.component';
import { BackgroundColorComponent } from './background-color/background-color.component';
import { ThePopoverComponent } from './the-popover/the-popover.component';
import { FdCalculatorComponent } from './fd-calculator/fd-calculator.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    NewsArticlePopUpComponent,
    CssChangerComponent,
    CounterWebApplicationComponent,
    LiveCharacterCountComponent,
    RandomNumberGeneratorComponent,
    WeightConverterComponent,
    CodeEditorComponent,
    DayOfTheWeekComponent,
    StopWatchComponent,
    WriteAMessageComponent,
    FormValidationComponent,
    ColorChangerWithButtonComponent,
    AccordionProjectComponent,
    TelephoneFormatterComponent,
    CursorAnimationComponent,
    HexColorGeneratorComponent,
    PianoApplicationComponent,
    BackgroundColorComponent,
    ThePopoverComponent,
    FdCalculatorComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    FormsModule
    
  ],
  exports: [
    
    NewsArticlePopUpComponent,
    CssChangerComponent,
    CounterWebApplicationComponent,
    LiveCharacterCountComponent,
    RandomNumberGeneratorComponent,
    WeightConverterComponent,
    CodeEditorComponent,
    DayOfTheWeekComponent,
    StopWatchComponent,
    WriteAMessageComponent,
    FormValidationComponent,
    ColorChangerWithButtonComponent,
    AccordionProjectComponent,
    TelephoneFormatterComponent,
    CursorAnimationComponent,
    HexColorGeneratorComponent,
    PianoApplicationComponent,
    BackgroundColorComponent,
    ThePopoverComponent,
    FdCalculatorComponent
  ]
})
export class ProjectsModule { }
