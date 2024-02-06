import { Component } from '@angular/core';

@Component({
  selector: 'app-weight-converter',
  templateUrl: './weight-converter.component.html',
  styleUrls: ['./weight-converter.component.css']
})
export class WeightConverterComponent {  
  inputWeight: number = 0;
  convertedWeight: number = 0;
  isError: boolean = false;
  isSuccess: boolean = false;

  convertWeight(event: Event) {
    event.preventDefault();

    if (isNaN(this.inputWeight) || this.inputWeight <= 0) {
      this.isError = true;
      this.convertedWeight = null!;

      setTimeout(() => {
        this.isError = false;
      }, 2500);
    } else {
      this.convertedWeight = this.inputWeight * 2.20462; // equal to 1 KG
      this.isSuccess = true;

      setTimeout(() => {
        this.isSuccess = false;
        this.inputWeight = 0;
        this.convertedWeight = 0;
      }, 10000);
    }
  }
}