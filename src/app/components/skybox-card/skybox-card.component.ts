import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {UploadPopupComponent} from "../upload-popup/upload-popup.component";
import {SkyboxInterface} from "../../interfaces/skybox-interface";

@Component({
  selector: 'app-skybox-card',
  templateUrl: './skybox-card.component.html',
  styleUrls: ['./skybox-card.component.scss']
})
export class SkyboxCardComponent implements OnInit {

  @Input()
  skybox!: SkyboxInterface;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(UploadPopupComponent, {
      data: {type: "Skybox", levelName: this.skybox.levelName}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
