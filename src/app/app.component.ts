import { Component, ViewChild } from '@angular/core';
import { NgbModal, NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FileUploadComponent, ImageEditorComponent, DisplayFile } from 'src/features';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  openModal: NgbModalRef;
  modalOptions: NgbModalOptions = {
    size: 'lg',
    backdrop: 'static',
    centered: true
  };

  uploadedFile: File = null;
  fileToDisplay: DisplayFile;

  @ViewChild('fileUpload') fileUploadComp: FileUploadComponent;
  @ViewChild('imageEditor') editorComp: ImageEditorComponent;

  constructor(private modalService: NgbModal) { }

  showFileUploadModal() {
    this.openModal = this.modalService.open(this.fileUploadComp, this.modalOptions);
  }

  handleFileUpload(file: File) {
    this.uploadedFile = file;
    this.closeModal();
    this.openModal = this.modalService.open(this.editorComp, this.modalOptions);
  }

  closeModal() {
    this.openModal.close();
  }

  displayEditedImage(event: DisplayFile) {
    this.closeModal();
    this.fileToDisplay = event;
  }

  reupload() {
    this.closeModal();
    this.uploadedFile = null;
    this.showFileUploadModal();
  }
}
