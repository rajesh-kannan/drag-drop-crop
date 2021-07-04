import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileName'
})
export class FileNamePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    const idxOfExtensionStart = value.lastIndexOf('.');
    const actualFileName = value.slice(0, idxOfExtensionStart);
    const extension = value.slice(idxOfExtensionStart + 1);

    const maxAllowedFileNameLength = args[0];

    const displayFileName = (actualFileName.length > maxAllowedFileNameLength)
      ? `${actualFileName.slice(0, 8)}...${actualFileName.slice(-3)}`
      : actualFileName;

    return `${displayFileName}.${extension}`;
  }

}
