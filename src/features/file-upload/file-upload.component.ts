import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  readonly ALLOWED_FILE_FORMATS = ['jpeg', 'png', 'tiff'];
  invalidFileFormat = false;

  @Output() fileUpload = new EventEmitter<File>();
  @Output() close = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  preventEvent(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
  }

  fileSelectHandler(event) {
    this.preventEvent(event);
    this.hideError();
    const uploadedFiles: FileList = event.target.files || event.dataTransfer.files;
    const uploadedFile = uploadedFiles[0];
    if (!this.isFileValid(uploadedFile)) {
      this.showError();
      setTimeout(() => this.hideError(), 3000);
      return;
    }
    this.fileUpload.emit(uploadedFile);
  }

  private isFileValid(file: File): boolean {
    return this.ALLOWED_FILE_FORMATS.some(format => file.type.includes(format));
  }

  private hideError() {
    this.invalidFileFormat = false;
  }

  private showError() {
    this.invalidFileFormat = true;
  }

  hide() {
    this.close.emit();
  }

}
