import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from 'src/common/common.module';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { MatButtonModule } from "@angular/material/button";
import { ImageEditorComponent } from './image-editor/image-editor.component';

@NgModule({
  declarations: [FileUploadComponent, ImageEditorComponent],
  exports: [FileUploadComponent, ImageEditorComponent],
  imports: [
    CommonModule,
    AppCommonModule,
    MatButtonModule
  ]
})
export class FeaturesModule { }
