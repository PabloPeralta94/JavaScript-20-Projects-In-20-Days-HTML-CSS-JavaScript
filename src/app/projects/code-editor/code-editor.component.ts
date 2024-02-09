import { Component } from '@angular/core';

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.css']
})


export class CodeEditorComponent {
  htmlCode: string = '';
  cssCode: string = '';
  jsCode: string = '';

  run() {
    const output = document.getElementById("output") as HTMLIFrameElement;
    if (output) {
      const doc = output.contentDocument;
      if (doc) {
        doc.body.innerHTML = this.htmlCode + "<style>" + this.cssCode + "</style>";
        const script = doc.createElement('script');
        script.text = this.jsCode;
        doc.body.appendChild(script);
      }
    }
  }
}

