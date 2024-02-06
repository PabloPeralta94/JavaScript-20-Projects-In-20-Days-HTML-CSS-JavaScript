import { Component } from '@angular/core';

@Component({
  selector: 'app-random-number-generator',
  templateUrl: './random-number-generator.component.html',
  styleUrls: ['./random-number-generator.component.css']
})
export class RandomNumberGeneratorComponent {

  randomNumber: number = 0;

  generateRandomNumber() {
    const min = 1;
    const max = 100;

    this.randomNumber = this.generateRandomNumberInRange(min, max);
  }

  private generateRandomNumberInRange(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

}
