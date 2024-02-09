import { Component } from '@angular/core';

@Component({
  selector: 'app-stop-watch',
  templateUrl: './stop-watch.component.html',
  styleUrls: ['./stop-watch.component.css']
})
export class StopWatchComponent implements OnInit {

  seconds = 0;
  miliSeconds = 0;

  interval: any;

  constructor() { }

  ngOnInit(): void {
    const addSeconds = document.querySelector(".seconds");
    const addMilliSeconds = document.querySelector(".milli");

    const startBtn = document.querySelector(".start");
    const stopBtn = document.querySelector(".stop");
    const resetBtn = document.querySelector(".reset");

    startBtn.onclick = () => {
      clearInterval(this.interval);
      this.interval = setInterval(this.start.bind(this), 10);
    };

    stopBtn.onclick = () => {
      clearInterval(this.interval);
    };

    resetBtn.onclick = () => {
      clearInterval(this.interval);
      this.seconds = 0;
      this.miliSeconds = 0;
      addSeconds.innerHTML = "00";
      addMilliSeconds.innerHTML = "00";
    };
  }

  start(): void {
    this.miliSeconds++;

    if (this.miliSeconds < 10) {
      addMilliSeconds.innerHTML = "0" + this.miliSeconds;
    } else {
      addMilliSeconds.innerHTML = this.miliSeconds;
    }

    if (this.miliSeconds > 99) {
      this.seconds++;
      addSeconds.innerHTML = this.seconds < 10 ? "0" + this.seconds : this.seconds;
      this.miliSeconds = 0;
      addMilliSeconds.innerHTML = "00";
    }
  }
}