import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import Cropper from 'cropperjs';
import { DisplayFile } from '../models/model';

@Component({
  selector: 'app-image-editor',
  templateUrl: './image-editor.component.html',
  styleUrls: ['./image-editor.component.scss']
})
export class ImageEditorComponent implements AfterViewInit {

  imgSrc: any;
  imgPreviewSrc: string;
  isEditing = true;
  private cropper: Cropper;

  @ViewChild('image') imageElement: ElementRef;

  @Input() file: File;

  @Output() save = new EventEmitter<DisplayFile>();
  @Output() close = new EventEmitter();
  @Output() reupload = new EventEmitter();

  constructor() { }

  ngAfterViewInit() {
    if (this.file) {
      var reader = new FileReader();
      reader.readAsDataURL(this.file);
      reader.onload = (_event) => {
        this.imgSrc = reader.result;

        setTimeout(() => { // settimeout added so that the image gets painted before accessing
          this.cropper = new Cropper(this.imageElement.nativeElement, {
            zoomable: false,
            aspectRatio: 1,
            crop: () => {
              const canvas = this.cropper.getCroppedCanvas();
              this.imgPreviewSrc = canvas.toDataURL(this.file.type)
            }
          })
        });
      }
    }
  }

  saveChanges() {
    this.save.emit({ src: this.imgPreviewSrc, name: this.file.name });
  }

  cancel() {
    this.close.emit();
  }

  reuploadImage() {
    this.reupload.emit();
  }

}
