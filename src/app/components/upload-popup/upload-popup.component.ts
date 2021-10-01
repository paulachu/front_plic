import { Component, OnInit, Input, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UploadDialogData } from 'src/app/interfaces/upload-dialog-data';

@Component({
  selector: 'app-upload-popup',
  templateUrl: './upload-popup.component.html',
  styleUrls: ['./upload-popup.component.scss']
})
export class UploadPopupComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: UploadDialogData) { }

  ngOnInit(): void {
  }

}
