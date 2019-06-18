import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-view-photo',
  templateUrl: './view-photo.component.html',
  styleUrls: ['./view-photo.component.scss']
})
export class ViewPhotoComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<ViewPhotoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    console.log(document.getElementById('img-content').clientHeight);
  }

  ngAfterViewInit(): void {

    // document.getElementById('img-container').style.height = document.getElementById('img-content').clientHeight + 'px';
  }

}
