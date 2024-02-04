import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-css-changer',
  templateUrl: './css-changer.component.html',
  styleUrls: ['./css-changer.component.css']
})
export class CssChangerComponent {
  
  @ViewChild('cssController') cssController: ElementRef | undefined;

  ngAfterViewInit() {
    const inputs = this.cssController!.nativeElement.querySelectorAll('input');
    inputs.forEach((input: HTMLInputElement) => {
      input.addEventListener('input', () => this.update(input));
      this.update(input);
    });
  }

  update(input: HTMLInputElement) {
    const suffixData = input.dataset['sizing'] || '';
    document.documentElement.style.setProperty(
      `--${input.name}`,
      input.value + suffixData
    );
  }

}
