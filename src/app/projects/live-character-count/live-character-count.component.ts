import { Component } from '@angular/core';

@Component({
  selector: 'app-live-character-count',
  templateUrl: './live-character-count.component.html',
  styleUrls: ['./live-character-count.component.css']
})
export class LiveCharacterCountComponent {

  characterCount: number = 0;

  countingCharacters() {
    const textarea = document.getElementById('textarea') as HTMLTextAreaElement;
    this.characterCount = textarea.value.length;
    console.log(this.characterCount);
  }

}
