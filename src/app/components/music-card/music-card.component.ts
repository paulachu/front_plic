import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import {MusicInterface} from "../../interfaces/music-interface";
import {UploadPopupComponent} from "../upload-popup/upload-popup.component";

@Component({
  selector: 'app-music-card',
  templateUrl: './music-card.component.html',
  styleUrls: ['./music-card.component.scss']
})
export class MusicCardComponent implements OnInit {
  @Input()
  musicInterface!: MusicInterface;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog()
  {
    const dialogRef = this.dialog.open(UploadPopupComponent, {
      data: {type: "Musique", levelName: this.musicInterface.levelName}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
