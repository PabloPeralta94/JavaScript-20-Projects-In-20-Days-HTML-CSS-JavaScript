import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-web-application',
  templateUrl: './counter-web-application.component.html',
  styleUrls: ['./counter-web-application.component.css']
})
export class CounterWebApplicationComponent { count = 0;

  onButtonClick(action: string): void {
    if (action === 'decrease') {
      this.count--;
    } else if (action === 'increase') {
      this.count++;
    }

    this.updateCounterStyles();
  }

  private updateCounterStyles(): void {
    const counterContainer = document.querySelector('.counter') as HTMLElement;
    const counter = document.querySelector('.counter-machine') as HTMLElement;

    counter.textContent = this.count.toString();

    if (this.count > 0) {
      counterContainer.classList.remove('negative');
      counterContainer.classList.add('positive');
    } else if (this.count < 0) {
      counterContainer.classList.remove('positive');
      counterContainer.classList.add('negative');
    } else {
      counterContainer.classList.remove('positive', 'negative');
    }
  }
}