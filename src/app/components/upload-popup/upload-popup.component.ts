import { Component, OnInit, Input, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UploadDialogData } from 'src/app/interfaces/upload-dialog-data';
import {RequestService} from "../../services/request.service";

@Component({
  selector: 'app-upload-popup',
  templateUrl: './upload-popup.component.html',
  styleUrls: ['./upload-popup.component.scss']
})
export class UploadPopupComponent implements OnInit {
  file?: File;
  filename?: string;
  constructor(public dialogRef: MatDialogRef<UploadPopupComponent>,
              @Inject(MAT_DIALOG_DATA) public data: UploadDialogData,
              private requestService: RequestService) { }

  ngOnInit(): void {
  }
  onFileSelected(event: Event): void {
    const eventTargetHtmlInputElement = event.target as HTMLInputElement;

    if (event.target && eventTargetHtmlInputElement.files && eventTargetHtmlInputElement.files[0]) {
      this.file = eventTargetHtmlInputElement.files[0];
      this.filename = eventTargetHtmlInputElement.files[0].name;
    }

  }
  uploadFile() {
    if (this.file && this.filename) {
      this.requestService
        .uploadFile(this.data.type, this.data.id, this.file, this.filename)
        .subscribe(res => this.dialogRef.close(res));
    }
  }
  closeDialog()
  {
    this.dialogRef.close(null);
  }
}
