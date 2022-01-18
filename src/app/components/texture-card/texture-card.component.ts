import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {TextureInterface} from "../../interfaces/texture-interface";
import {UploadPopupComponent} from "../upload-popup/upload-popup.component";

@Component({
  selector: 'app-texture-card',
  templateUrl: './texture-card.component.html',
  styleUrls: ['./texture-card.component.scss']
})
export class TextureCardComponent implements OnInit {

  @Input()
  texture!: TextureInterface;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog()
  {
    const dialogRef = this.dialog.open(UploadPopupComponent, {
      data: {type: "Texture", id: this.texture.id, levelNumber: this.texture.levelNumber}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null)
      {
        this.texture.presignedUrl = result.presignedUrl;
        console.log(result)
      }
    });
  }
}
