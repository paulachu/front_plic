import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {LightInterface} from "../../interfaces/light-interface";
import {LightPopupComponent} from "../light-popup/light-popup.component";

@Component({
  selector: 'app-light-card',
  templateUrl: './light-card.component.html',
  styleUrls: ['./light-card.component.scss']
})
export class LightCardComponent implements OnInit {

  @Input()
  light!: LightInterface;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {

  }
  openDialog()
  {
    const dialogRef = this.dialog.open(LightPopupComponent, {
      data: this.light
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null)
      {
        this.light = result
      }
    });
  }
  getColor(): string
  {
    return 'rgba(' + this.light.red + ',' + this.light.green + ','
            + this.light.blue + ',' + this.light.alpha / 255 + ')';
  }
}
