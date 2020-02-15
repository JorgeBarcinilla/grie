import { Injectable } from '@angular/core';
import { ImageExampleComponent } from '../components/utils/image-example/image-example.component';
import { MatDialog } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class MostrarEjemplosService {

  constructor(public dialog: MatDialog) { }

  abrir(src:string, title: string): void {
    this.dialog.open(ImageExampleComponent, {
      data: {
        src: src, 
        title: title
      }
    });
  }
}
