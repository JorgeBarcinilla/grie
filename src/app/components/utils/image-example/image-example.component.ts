import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-image-example',
  templateUrl: './image-example.component.html',
  styleUrls: ['./image-example.component.css']
})
export class ImageExampleComponent implements OnInit {

  src: string;
  title: string;

  constructor(
    public dialogRef: MatDialogRef<ImageExampleComponent>,@Inject(MAT_DIALOG_DATA) public data: any) {
      this.src = data.src;
      this.title = data.title;
    }

  ngOnInit() {
  }

}
