import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day-of-the-week',
  templateUrl: './day-of-the-week.component.html',
  styleUrls: ['./day-of-the-week.component.css']
})
export class DayOfTheWeekComponent implements OnInit {
  theDayIs: string = "";
  quote: string = "";

  constructor() { }

  ngOnInit(): void {
    const date = new Date();
    const dayNumber = date.getDay();

    switch(dayNumber) {
      case 0:
        this.theDayIs = "Sunday";
        this.quote = "Time to chillax";
        break;
      case 1:
        this.theDayIs = "Monday";
        this.quote = "Monday is a day of Work";
        break;
      case 2:
        this.theDayIs = "Tuesday";
        this.quote = "Tuesday is a Second day of Work";
        break;
      case 3:
        this.theDayIs = "Wednesday";
        this.quote = "Wednesday is a Third day of Work";
        break;
      case 4:
        this.theDayIs = "Thursday";
        this.quote = "Thursday is a Meeting day of Work";
        break;
      case 5:
        this.theDayIs = "Friday";
        this.quote = "Weekend is almost here.....";
        break;
      case 6:
        this.theDayIs = "Saturday";
        this.quote = "Time to party";
        break;
      default:
        this.theDayIs = "Unknown";
        this.quote = "Enjoy your day!";
    }
  }

}