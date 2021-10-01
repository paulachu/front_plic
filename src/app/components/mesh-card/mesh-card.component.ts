import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MeshInterface} from "../../interfaces/mesh-interface";
import {UploadPopupComponent} from "../upload-popup/upload-popup.component";

@Component({
  selector: 'app-mesh-card',
  templateUrl: './mesh-card.component.html',
  styleUrls: ['./mesh-card.component.scss']
})
export class MeshCardComponent implements OnInit {
  @Input()
  mesh!: MeshInterface;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog()
  {
    const dialogRef = this.dialog.open(UploadPopupComponent, {
      data: {type: "Mesh", levelName: this.mesh.levelName}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
