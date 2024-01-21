import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedInputType: string = 'text';
  textInput: string = '';
  selectedFile: File | null = null;
  predictedCategory: string | null = null;


  onFileSelected(event: Event): void {
    const element = event.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if (fileList) {
      this.selectedFile = fileList[0];
    }
  }

  predictCategory(): void {
    if (this.selectedInputType === 'text') {
      this.sendTextForPrediction(this.textInput);
    } else if (this.selectedFile) {
      this.sendFileForPrediction(this.selectedFile);
    }
  }

  sendTextForPrediction(text: string): void {
    // TODO
  }

  sendFileForPrediction(file: File): void {
    // TODO
  }

  handlePredictionResult(category: string): void {
    this.predictedCategory = category;
  }
}
