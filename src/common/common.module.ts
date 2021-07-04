import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileNamePipe } from './pipes/file-name/file-name.pipe';

@NgModule({
  declarations: [FileNamePipe],
  exports: [FileNamePipe],
  imports: [
    CommonModule
  ]
})
export class AppCommonModule { }
